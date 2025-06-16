const axios = require("axios")

const axiosService = axios.create({
    baseURL: "https://formula-cardz-api.onrender.com",
})

module.exports = { axiosService }