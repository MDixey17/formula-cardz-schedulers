const {axiosService} = require("./axiosService");

const health = async () => {
    const response = await axiosService.get('/v1/health')
    return response.data.message
}

module.exports = {
    health
}