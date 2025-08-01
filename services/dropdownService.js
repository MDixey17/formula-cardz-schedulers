const { axiosService } = require('./axiosService')

const getSetsDropdown = async () => {
    const response = await axiosService.get('/v1/dropdown/sets')

    return response.data
}

const getPossibleParallels = async (setName) => {
    const response = await axiosService.get(`/v1/parallels/${setName}`)

    return response.data.parallels
}

const getPossibleDrivers = async (setName) => {
    const response = await axiosService.get(`/v1/dropdown/drivers/${setName}`)

    return response.data
}

module.exports = {
    getSetsDropdown,
    getPossibleParallels,
    getPossibleDrivers
}