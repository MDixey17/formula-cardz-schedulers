const cron = require("node-cron");
const { scrapeSoldItems } = require("./scraper");
const fs = require("fs");
const path = require("path");
const dayjs = require("dayjs");
const {login} = require("./services/authService");
const {getSetsDropdown, getPossibleParallels, getPossibleDrivers} = require("./services/dropdownService");
const {normalize, removeSapphire, checkChromeVariants, checkImageVariation} = require("./utils/utils");
const {getCardByCriteria} = require("./services/cardService");
const env = require("dotenv").config();

async function runScraper() {
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    console.log('Logging in to get token to save data...')
    const token = await login(process.env.EMAIL, process.env.PASSWORD)
    console.log('Token retrieved!')

    console.log('Fetching sets dropdown to get sales for...')
    // const sets = await getSetsDropdown() -- FILTER DYNASTY,ECCELLENZA,LIGHTS OUT
    const sets = [ {
        label: '2024 Topps Paddock Pass Formula 1',
        value: '2024 Topps Paddock Pass Formula 1'
    } ]
    const SEARCH_TERMS = sets.map((set) => set.label)
    console.log('Sets retrieved!')

    console.log("🕵️‍♂️ Scraper running...");
    const timestamp = dayjs().format("YYYY-MM-DD");

    const allResults = [];

    for (const term of SEARCH_TERMS) {
        // Track sales and group by day
        // Key = string of cardID | Date ISO | parallel ?? Base
        const salesGrouped = new Map()

        // Get possible parallels & drivers
        const possibleParallels = await getPossibleParallels(term)
        const possibleDrivers = await getPossibleDrivers(term)

        // Get normalized values
        const parallelMap = possibleParallels.map((p) => ({ name: p.name, norm: normalize(removeSapphire(p.name)), printRun: `/${p.printRun}` }))
        const driverMap = possibleDrivers.map((p) => ({ name: p.label, norm: normalize(p.label) }))

        const results = await scrapeSoldItems(term);

        // for (const result of results) {
        if (results.length === 0) {
            console.log('No results found.')
            return
        }
        for (let i = 0; i < 15; i++) {
            const result = results[i];
            const {title, price, date} = result
            console.log(`\nStarting ${i + 1}`)
            console.log('Title: ', title);
            console.log('Price: ', price);
            const dateIso = new Date(date).toISOString().split("T")[0];
            console.log('Date: ', dateIso);
            const normTitle = normalize(title)

            // Check against the set name of the listing -- if searching chrome, make sure title does not include logofractor or sapphire
            if (!checkChromeVariants(term.toLowerCase(), title.toLowerCase())) {
                // Skip
                console.log('Failed against chrome variant check, skipping...')
                continue
            }

            // Get the card number
            const cardNumberMatch = title.match(/#([A-Z0-9-]+)/)
            let cardNumber = cardNumberMatch ? cardNumberMatch[1] : undefined
            if (cardNumber === undefined) {
                // Skip
                console.log('Failed to find card number, skipping...')
                continue
            }

            // Get the driver name
            const driverMatch = driverMap.find(driver => normTitle.includes(driver.norm))?.name
            if (driverMatch === undefined) {
                // Skip
                console.log('Failed to find driver match, skipping...')
                continue
            }

            // Check if the card is an image variation
            const isImageVariation = checkImageVariation(title, cardNumber, driverMatch)
            if (isImageVariation) {
                console.log('Found an image variation!')
                cardNumber = `${cardNumber}a`
            }

            // SPECIAL CASE: Paddock Pass cards are marked 'a' or 'b' for the first 20 cards
            if (term.toLowerCase().includes('paddock pass')) {
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
            if (term.includes('Finest')) {
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
                matchedParallel = term.includes('Sapphire') || term.includes('Logofractor') ? sapphireMatch : allMatch
            }

            // Get card ID
            const card = await getCardByCriteria(term, driverMatch, cardNumber, token)
            if (card === null) {
                console.log(`No card found with the following criteria:\nSet: ${term}\nDriver: ${driverMatch}\nCard #: ${cardNumber}\n\n`)
                continue
            }

            const key = matchedParallel === 'Base' ? `${card.id}|${dateIso}` : `${card.id}|${dateIso}|${matchedParallel}`
            console.log(`Key: ${key}`)
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
        }

        // TESTING: append to list for JSON
        const keys = [...salesGrouped.keys()]
        keys.forEach(key => {
            const data = salesGrouped.get(key)
            allResults.push({
                ...data,
                cardId: key.split("|")[0]
            })
        })
        console.log('Completed for set: ', term, '\n\n')
        await delay(300000); // 5 minutes between requests
    }

    fs.writeFileSync(
        path.join(__dirname, `results-${timestamp}.json`),
        JSON.stringify(allResults, null, 2)
    );

    console.log(`✅ Scraped and saved results for ${timestamp}`);
}

// Cron: Every Wednesday at 9am
// cron.schedule("0 9 * * 3", () => {
//     runScraper();
// });

runScraper();
