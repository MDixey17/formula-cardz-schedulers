const cron = require("node-cron");
const { scrapeSoldItems } = require("./scraper");
const fs = require("fs");
const path = require("path");
const dayjs = require("dayjs");
const {login} = require("./services/authService");
const {getSetsDropdown, getPossibleParallels, getPossibleDrivers} = require("./services/dropdownService");
const {normalize, removeSapphire, checkChromeVariants} = require("./utils/utils");
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
    // const sets = await getSetsDropdown()
    const sets = [ {
        label: '2023 Topps Chrome Formula 1',
        value: '2023 Topps Chrome Formula 1'
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
        const parallelMap = possibleParallels.map((p) => ({ name: p.label, norm: normalize(removeSapphire(p.label)) }))
        const driverMap = possibleDrivers.map((p) => ({ name: p.label, norm: normalize(p.label) }))

        const results = await scrapeSoldItems(term);

        // fs.writeFileSync(
        //     path.join(__dirname, `${term}-results-${timestamp}.json`),
        //     JSON.stringify(results, null, 2)
        // );

        // for (const result of results) {
        if (results.length === 0) {
            console.log('No results found.')
            return
        }
        for (let i = 0; i < 10; i++) {
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
            const cardNumber = cardNumberMatch ? cardNumberMatch[1] : undefined
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

            // Check for a parallel
            const matchedParallel = parallelMap.find(p => normTitle.includes(p.norm))?.name ?? 'Base'

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
        await delay(10000); // 10 seconds between requests
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
