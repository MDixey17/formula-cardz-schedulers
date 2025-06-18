const {axiosService} = require('./axiosService')

const addMarketPrice = async (body, token) => {
    await axiosService.put('/v1/marketprice', body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

module.exports = { addMarketPrice }