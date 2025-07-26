const {login} = require("../services/authService");
const {PSA_ONE_OF_ONE_MAP} = require("../utils/one-of-one-map");
const {getPopulationReport} = require("../services/psaService");
const {delay} = require("../utils/utils");
const {updateOneOfOneStatus} = require("../services/oneOfOneService");

const getAllOneOfOnes = async () => {
    let totalUpdates = 0
    console.log("Logging in to get token to update 1/1 status...")
    const token = await login(process.env.EMAIL, process.env.PASSWORD)
    console.log('Token retrieved!')

    console.log('Checking PSA Population Report...')
    for (let i = 0; i < PSA_ONE_OF_ONE_MAP.length; i++) {
        const item = PSA_ONE_OF_ONE_MAP[i]
        console.log(`Starting ${item.setName} (${item.logName})...`)
        try {
            while (true) {
                const foundOneOfOnes = await getPopulationReport(item.psaUrl, item.searchTerm, item.cardNumberPrefix, item.dashIndex)
                if (foundOneOfOnes.length === 0) {
                    console.warn(`Failed to capture data from PSA! Waiting 3 minutes before attempting again for ${item.setName} (${i + 1} / ${PSA_ONE_OF_ONE_MAP.length})`)
                    await delay(180000)
                } else {
                    console.log(`Saving ${foundOneOfOnes.length} 1/1s...`)
                    for (let j = 0; j < foundOneOfOnes.length; j++) {
                        console.log(`Attempting to save ${foundOneOfOnes[j].cardNumber} for ${item.setName} (${item.parallel})...`)
                        const isSuccess = await updateOneOfOneStatus(item.setName, foundOneOfOnes[j].cardNumber, item.parallel, token)
                        if (isSuccess === true) {
                            totalUpdates += 1
                        }
                    }
                    break
                }
            }
            console.log(`Completed ${item.setName} (${item.parallel}) (${i + 1} / ${PSA_ONE_OF_ONE_MAP.length})\n`)
        } catch (error) {
            console.error(`Caught error when trying to get 1/1 from PSA Population Report for ${item.setName}! Error: ${error}\n${error.message}`)
        }

        // Sleep for 1 minute
        await delay(60000)
    }

    console.log(`Completed all 1/1 checks! Tracker is up to date!\nUpdated ${totalUpdates} 1/1 statuses!`)
}

module.exports = {
    getAllOneOfOnes,
}