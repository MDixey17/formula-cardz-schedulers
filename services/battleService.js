const {axiosService} = require("./axiosService");


const createCardBattle = async (cardOneId, cardTwoId, token) => {
    // Create expiration date string
    const now = new Date();
    const expirationDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0, 0, 0, 0
    )

    // Format it as a local ISO-like string (e.g., "2025-06-20T00:00:00")
    const year = expirationDate.getFullYear();
    const month = String(expirationDate.getMonth() + 1).padStart(2, '0');
    const day = String(expirationDate.getDate()).padStart(2, '0');
    const hours = String(expirationDate.getHours()).padStart(2, '0');
    const minutes = String(expirationDate.getMinutes()).padStart(2, '0');
    const seconds = String(expirationDate.getSeconds()).padStart(2, '0');

    await axiosService.post(`/v1/battles/create`, {
        cardOneId: cardOneId,
        cardTwoId: cardTwoId,
        expiresAt: `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

const expireCardBattles = async (token) => {
    const response = await axiosService.put(`/v1/battles/expire`, undefined, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return response.data.expiredCount
}

module.exports = { createCardBattle, expireCardBattles }