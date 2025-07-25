const {getPsaOneOfOneReport} = require("../scraper");
const {insertDashAt} = require("../utils/utils");

const getPopulationReport = async (psaUrl, searchTerm, cardNumberPrefix, dashIndex) => {
    const foundOneOfOnes = await getPsaOneOfOneReport(psaUrl, searchTerm)
    console.log(`Found ${foundOneOfOnes.length} 1/1s`)
    return foundOneOfOnes.map(oneOfOne => ({
        cardNumber: cardNumberPrefix !== undefined ? `${cardNumberPrefix}${oneOfOne.cardNumber}` : dashIndex !== undefined ? insertDashAt(oneOfOne.cardNumber, dashIndex) : oneOfOne.cardNumber,
        driverName: oneOfOne.driverName,
    }))
}

module.exports = {
    getPopulationReport
}