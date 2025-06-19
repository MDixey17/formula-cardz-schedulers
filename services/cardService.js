const {axiosService} = require("./axiosService");

const getCardByCriteria = async (setName, driver, cardNumber, token) => {
    const response = await axiosService.get(`/v1/cards?setName=${setName}&driverName=${driver}&cardNumber=${cardNumber}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data.length > 0 ? response.data[0] : null
}

const getCardsByYear = async (year, token) => {
    const response = await axiosService.get(`/v1/cards?year=${year}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data.length > 0 ? response.data : null
}

module.exports = { getCardByCriteria, getCardsByYear }