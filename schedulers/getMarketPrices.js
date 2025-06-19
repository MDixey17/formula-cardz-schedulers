const {login} = require("../services/authService");
const {getSetsDropdown, getPossibleParallels, getPossibleDrivers} = require("../services/dropdownService");
const dayjs = require("dayjs");
const {scrapeSoldItems} = require("../scraper");
const {delay, normalize, removeSapphire, checkSetName, checkImageVariation, isPreviousDay} = require("../utils/utils");
const {getCardByCriteria} = require("../services/cardService");
const {addMarketPrice} = require("../services/marketService");

const runScraper = async (searchTerm) => {
    const results = await scrapeSoldItems(searchTerm);

    return results.length > 0 ? results : null
}

const getRecentEbaySales = async () => {
    console.log('Logging in to get token to save data...')
    const token = await login(process.env.EMAIL, process.env.PASSWORD)
    console.log('Token retrieved!')

    console.log('Fetching sets dropdown to get sales for...')
    const setsDropdown = await getSetsDropdown()
    const sets = setsDropdown
        .filter((set) => !set.label.toLowerCase().includes('dynasty')
            && !set.label.toLowerCase().includes('eccellenza')
            && !set.label.toLowerCase().includes('lights out'))
        .map((set) => set.label)
    console.log('Sets retrieved!')

    console.log("🕵️‍♂️ Scraper running...");
    const timestamp = dayjs().format("YYYY-MM-DD");

    let i = 0
    while (i < sets.length) {
        const setName = sets[i]
        const results = await runScraper(setName)
        if (results === null) {
            console.log(`Scraper failed to run ${setName}! Retrying in 5 minutes...`)
        } else {
            // Track sales and group by day
            // Key = string of cardID | Date ISO | parallel ?? Base
            const salesGrouped = new Map()

            // Get possible parallels & drivers
            const possibleParallels = await getPossibleParallels(setName)
            const possibleDrivers = await getPossibleDrivers(setName)

            // Get normalized values
            const parallelMap = possibleParallels.map((p) => ({ name: p.name, norm: normalize(removeSapphire(p.name)), printRun: `/${p.printRun}` }))
            const driverMap = possibleDrivers.map((p) => ({ name: p.label, norm: normalize(p.label) }))

            // Iterate through results
            for (let j = 0; j < results.length; j++) {
                const sale = results[j]
                const { title, price, date } = sale

                const dateIso = new Date(date).toISOString().split("T")[0];
                console.log(`Processing ${title} on ${dateIso}...`)

                // Check if this sale is already in the database before processing
                if (!isPreviousDay(dateIso)) {
                    console.log('Sale has already been processed. Skipping...')
                    continue
                }

                const normTitle = normalize(title)

                // Check against the set name of the listing
                if (!checkSetName(setName.toLowerCase(), title.toLowerCase())) {
                    // Skip
                    console.log('Failed against set name check, skipping...\n')
                    continue
                }

                // Get the card number
                const cardNumberMatch = title.match(/#([A-Z0-9-]+)/)
                let cardNumber = cardNumberMatch ? cardNumberMatch[1] : undefined
                if (cardNumber === undefined) {
                    // Skip
                    console.log('Failed to find card number, skipping...\n')
                    continue
                }

                // Get the driver name
                const driverMatch = driverMap.find(driver => normTitle.includes(driver.norm))?.name
                if (driverMatch === undefined) {
                    // Skip
                    console.log('Failed to find driver match, skipping...\n')
                    continue
                }

                // Check if the card is an image variation
                const isImageVariation = checkImageVariation(title, cardNumber, driverMatch)
                if (isImageVariation) {
                    console.log('Found an image variation!')
                    cardNumber = `${cardNumber}a`
                }

                // SPECIAL CASE: Paddock Pass cards are marked 'a' or 'b' for the first 20 cards
                if (setName.toLowerCase().includes('paddock pass')) {
                    const isNumber = /^\d+$/.test(isImageVariation ? cardNumber.substring(0, cardNumber.length - 1) : cardNumber)
                    if (isNumber) {
                        const number = parseInt(cardNumber)
                        if (number <= 20) {
                            cardNumber = isImageVariation ? cardNumber.replace('a', 'b') : `${cardNumber}a`
                        }
                    }
                }

                // Check for a parallel
                let matchedParallel = "Base"
                if (setName.includes('Finest')) {
                    // Filter the possible parallels by if the name contains 'auto' or 'relic'
                    let modifiedParallels = []
                    if (title.toLowerCase().includes('auto')) {
                        modifiedParallels = possibleParallels.filter(parallel => parallel.name.toLowerCase().includes('auto'))
                        // console.log('Auto modified parallels: ', modifiedParallels)
                    } else if (title.toLowerCase().includes('relic')) {
                        modifiedParallels = possibleParallels.filter(parallel => parallel.name.toLowerCase().includes('relic'))
                        // console.log('Relic modified parallels: ', modifiedParallels)
                    } else if (!title.toLowerCase().includes('common') && !title.toLowerCase().includes('uncommon') && !title.toLowerCase().includes('rare')) {
                        modifiedParallels = possibleParallels.filter(parallel => parallel.name.toLowerCase().includes('insert') || parallel.name.toLowerCase().includes('checkerboard'))
                        // console.log('Insert modified parallels: ', modifiedParallels)
                    } else {
                        modifiedParallels = possibleParallels.filter(parallel => !parallel.name.toLowerCase().includes('relic') && !parallel.name.toLowerCase().includes('auto'))
                        // console.log('Regular modified parallels: ', modifiedParallels)
                    }
                    const modifiedMap = modifiedParallels.map((p) => ({ name: p.name, norm: normalize(removeSapphire(p.name)), printRun: `/${p.printRun}` }))

                    matchedParallel = modifiedMap.findLast(p => normTitle.includes(p.norm))?.name ?? modifiedMap.find(p => title.includes(p.printRun))?.name ?? 'Base'
                } else {
                    const allMatch = parallelMap.findLast(p => normTitle.includes(p.norm))?.name ?? parallelMap.find(p => title.includes(p.printRun))?.name ?? 'Base'
                    const sapphireMatch = parallelMap.find(p => title.includes(p.printRun))?.name ?? 'Base'
                    matchedParallel = setName.includes('Sapphire') || setName.includes('Logofractor') ? sapphireMatch : allMatch
                }

                // Get card ID
                const card = await getCardByCriteria(setName, driverMatch, cardNumber, token)
                if (card === null) {
                    console.log(`No card found with the following criteria:\nSet: ${setName}\nDriver: ${driverMatch}\nCard #: ${cardNumber}\n`)
                    continue
                }

                const key = matchedParallel === 'Base' ? `${card.id}|${dateIso}` : `${card.id}|${dateIso}|${matchedParallel}`
                if (!salesGrouped.has(key)) {
                    let newBody = {
                        prices: [],
                        timestamp: dateIso,
                        source: 'eBay'
                    }

                    if (matchedParallel !== 'Base') {
                        newBody = {
                            ...newBody,
                            parallel: matchedParallel,
                        }
                    }
                    salesGrouped.set(key, newBody)
                }

                salesGrouped.get(key).prices.push(price)
                console.log(`Completed processing for ${title}!\n`)
            }
            // Push all sales via PUT request
            for (const [key, {prices, timestamp, source, parallel}] of salesGrouped) {
                const cardId = key.split('|')[0]
                const lowestPrice = Math.min(...prices)
                const highestPrice = Math.max(...prices)
                const averagePrice = +(prices.reduce((a, b) => a + b, 0) / prices.length).toFixed(2)
                let requestBody = {
                    cardId,
                    timestamp,
                    source,
                    lowestPrice,
                    averagePrice,
                    highestPrice,
                }

                if (parallel !== undefined && parallel !== null && parallel !== 'Base') {
                    requestBody.parallel = parallel
                }

                await addMarketPrice(requestBody, token)
                console.log(`Added market price for card with ID ${cardId}`)
            }
            console.log(`Successfully iterated through data for ${setName}! Sleeping for 5 minutes before next set...`)
            i++
        }
        await delay(300000)
    }

    console.log(`✅ Scraped and saved results for ${timestamp}`);
}

module.exports = {
    getRecentEbaySales
}