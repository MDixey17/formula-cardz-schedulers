const {health} = require("../services/healthService");

const runHealthCheck = async () => {
    const message = await health()
    console.log('Message from API: ', message)
}

module.exports = {
    runHealthCheck
}