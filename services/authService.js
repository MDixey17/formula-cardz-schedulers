const {axiosService} = require("./axiosService");
const {delay} = require("../utils/utils");

const login = async (email, password) => {
    const loginBody = {
        email: email,
        password: password
    }

    while (true) {
        try {
            const loginResponse = await axiosService.post('/v1/auth/login', loginBody);
            return loginResponse.data.token
        } catch (e) {
            console.error(`Caught error when trying to login, likely a timeout error. Error: ${e.status ?? e.name}`)
            console.log('Retrying login in 1 minute...')
            await delay(60000)
        }
    }
}

module.exports = { login }