const {axiosService} = require('./axiosService')
const {getCardBySetNameAndNumber} = require("./cardService");

const updateOneOfOneStatus = async (setName, cardNumber, parallel, token) => {
    const card = await getCardBySetNameAndNumber(setName, cardNumber, token);
    if (!card) {
        console.warn(`No card found in ${setName} with card number ${cardNumber}`);
        return false
    }

    const requestBody = {
        cardId: card.id,
        parallelName: parallel,
        newStatus: true
    }

    try {
        await axiosService.put(`/v1/oneofones`, requestBody, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(`Successfully updated ${parallel} 1/1 status for ${cardNumber} in ${setName}!`)
        return true
    } catch (error) {
        console.error(`Caught error when attempting to update 1/1 status. Error ${error.status ?? error.name}.\nIf the error is a 404, this is because the 1/1 status is already updated and can be safely ignored.`)
        return false
    }
}

module.exports = {
    updateOneOfOneStatus
}