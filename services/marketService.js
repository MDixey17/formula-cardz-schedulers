const {axiosService} = require('./axiosService')

const addMarketPrice = async (cardId, timestamp, lowest, average, highest, source, token, parallel) => {
    let body = {
        cardId: cardId,
        timestamp,
        lowestPrice: lowest,
        averagePrice: average,
        highestPrice: highest,
        source: source
    }

    if (parallel !== undefined) {
        body.parallel = parallel
    }

    await axiosService.put('/v1/marketprice', body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

module.exports = { addMarketPrice }