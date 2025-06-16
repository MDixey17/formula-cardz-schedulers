const {axiosService} = require("./axiosService");

const login = async (email, password) => {
    const loginBody = {
        email: email,
        password: password
    }

    const loginResponse = await axiosService.post('/v1/auth/login', loginBody);
    return loginResponse.data.token
}

module.exports = { login }