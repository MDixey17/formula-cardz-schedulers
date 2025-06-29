const {scrapeSoldItems} = require("../scraper");
const {login} = require("../services/authService");
const {getSetsDropdown, getPossibleParallels, getPossibleDrivers} = require("../services/dropdownService");
const dayjs = require("dayjs");
const {normalize, isPreviousDay, removeDiacritics, delay} = require("../utils/utils");
const {DYNASTY_2020, DYNASTY_2021, DYNASTY_2022, DYNASTY_2023, DYNASTY_2024} = require("../utils/dynasty-map");
const {getCardByCriteria} = require("../services/cardService");
const {addMarketPrice} = require("../services/marketService");
const {LIGHTS_OUT_22_NUMBERS, LIGHTS_OUT_25_MAP} = require("../utils/lights-out-map");
const {ECCELLENZA_2023, ECCELLENZA_2024} = require("../utils/eccellenza-map");

const SET_NAME_MAP = {
    '2020 Topps Dynasty Formula 1': DYNASTY_2020,
    '2021 Topps Dynasty Formula 1': DYNASTY_2021,
    '2022 Topps Dynasty Formula 1': DYNASTY_2022,
    '2023 Topps Dynasty Formula 1': DYNASTY_2023,
    '2024 Topps Dynasty Formula 1': DYNASTY_2024,
    '2022 Topps Lights Out Formula 1': LIGHTS_OUT_22_NUMBERS,
    '2025 Topps Lights Out Formula 1': LIGHTS_OUT_25_MAP,
    '2023 Topps Eccellenza Formula 1': ECCELLENZA_2023,
    '2024 Topps Eccellenza Formula 1': ECCELLENZA_2024,
}

const runScraper = async (searchTerm) => {
    const results = await scrapeSoldItems(searchTerm)

    return results.length > 0 ? results : null
}

const getInitials = (driverName, lettersInLast) => {
    const [first, last] = driverName.split(" ")
    return first[0].toUpperCase() + last.slice(0, lettersInLast).toUpperCase()
}

const getCardNumber = (title, setName, driverMatch) => {
    const cardNumberMap = SET_NAME_MAP[setName]
    if (cardNumberMap) {
        const key = Object.keys(cardNumberMap).find(key => title.toLowerCase().includes(key.toLowerCase()))
        const prefix = cardNumberMap[key] || "UNK"
        if (setName.toLowerCase().includes('dynasty')) {
            // Further card number parsing required
            if (setName.includes('2024')) {
                // 2 characters required from last name
                return `${prefix}-${getInitials(driverMatch, 2)}`
            } else {
                // Only first letter of first and last name required
                return `${prefix}-${getInitials(driverMatch, 1)}`
            }
        } else {
            // Return the found card number
            return prefix
        }
    } else {
        console.log(`Card number map not found for ${setName}`)
    }

    return undefined
}

const checkHighEndSetName = (title, setName) => {
    let year = setName.split(' ')[0]
    if (!title.includes(year)) {
        return false
    }

    if (setName.toLowerCase().includes('dynasty') && title.toLowerCase().includes("dynasty")) {
        return true
    } else if (setName.toLowerCase().includes('eccellenza') && title.toLowerCase().includes("eccellenza")) {
        return true
    } else if (setName.toLowerCase().includes('lights out') && title.toLowerCase().includes("lights out")) {
        return true
    }

    return false
}

const getRecentEbaySalesForHighEndSets = async () => {
    console.log('Logging in to get token to save data...')
    const token = await login(process.env.EMAIL, process.env.PASSWORD)
    console.log('Token retrieved!')

    console.log('Fetching sets dropdown to get sales for...')
    const setsDropdown = await getSetsDropdown()
    const sets = setsDropdown
        .filter((set) => set.label.toLowerCase().includes('dynasty')
            || set.label.toLowerCase().includes('eccellenza')
            || set.label.toLowerCase().includes('lights out'))
        .map((set) => set.label)

    // TESTING
    // const sets = ["2025 Topps Lights Out Formula 1"]

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
            const driverMap = possibleDrivers.map((p) => ({ name: p.label, norm: normalize(p.label) }))
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
                if (!checkHighEndSetName(title, setName)) {
                    console.log(`Failed against set name check, skipping...\n`)
                    continue
                }

                // Get the matching driver
                const driverName = driverMap.find(driver => normTitle.includes(driver.norm))?.name
                if (driverName === undefined) {
                    // Skip
                    console.log('Failed to find driver match, skipping...\n')
                    continue
                }
                const driverMatch = removeDiacritics(driverName)

                // Get the parallel, if there is one
                const parallel = possibleParallels.find(p => title.toLowerCase().includes(p.name.toLowerCase()))?.name || null;
                console.log(`Found parallel: ${parallel}`)

                // Get the card number
                const cardNumberMatch = title.match(/#([A-Z0-9-]+)/)
                let cardNumber = cardNumberMatch ? cardNumberMatch[1] : undefined
                if (cardNumber === undefined) {
                    // See if we can find the card number based off of key terms in the title
                    const parsedCardNumber = getCardNumber(title, setName, driverMatch)
                    if (parsedCardNumber === undefined) {
                        console.log(`Failed to find card number, skipping...\n`)
                        continue
                    }
                    cardNumber = parsedCardNumber
                }

                // Check if the card exists
                const card = await getCardByCriteria(setName, driverMatch, cardNumber, token)
                if (card === null) {
                    console.log(`No card found with the following criteria:\nSet: ${setName}\nDriver: ${driverMatch}\nCard #: ${cardNumber}\n`)
                    continue
                }

                const key = parallel === null ? `${card.id}|${dateIso}` : `${card.id}|${dateIso}|${parallel}`
                if (!salesGrouped.has(key)) {
                    let newBody = {
                        prices: [],
                        timestamp: dateIso,
                        source: 'eBay'
                    }

                    if (parallel !== null && parallel !== 'Base') {
                        newBody = {
                            ...newBody,
                            parallel: parallel,
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

    console.log(`✅ Scraped and saved results for high end sets for ${timestamp}`);
}

module.exports = {
    getRecentEbaySalesForHighEndSets
}