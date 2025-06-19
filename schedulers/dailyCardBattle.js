const {login} = require("../services/authService");
const {getCardsByYear} = require("../services/cardService");
const {createCardBattle, expireCardBattles} = require("../services/battleService");

const AVAILABLE_YEARS = [
    2020,
    2021,
    2022,
    2023,
    2024,
    2025
]

const createDailyCardBattle = async () => {
    console.log("Logging in to get token to create and expire card battles...")
    const token = await login(process.env.EMAIL, process.env.PASSWORD)
    console.log('Token retrieved!')

    console.log('Picking two random years')
    let randomYearOneIndex = Math.floor(Math.random() * AVAILABLE_YEARS.length);
    let randomYearTwoIndex = Math.floor(Math.random() * AVAILABLE_YEARS.length);
    if (randomYearOneIndex >= AVAILABLE_YEARS.length) {
        randomYearOneIndex--
    }
    if (randomYearTwoIndex >= AVAILABLE_YEARS.length) {
        randomYearTwoIndex--
    }
    const randomYearOne = AVAILABLE_YEARS[randomYearOneIndex];
    const randomYearTwo = AVAILABLE_YEARS[randomYearTwoIndex];

    console.log(`Getting cards in the year ${randomYearOne}...`)
    const possibleCardsOne = await getCardsByYear(randomYearOne, token)
    if (possibleCardsOne === null) {
        console.log('No cards found for the year! Skipping card battle for today...')
        return
    }
    console.log(`Found ${possibleCardsOne.length} cards for today's battle! Choosing one at random for spot 1...`)
    let randomCardOneIndex = Math.floor(Math.random() * possibleCardsOne.length);
    if (randomCardOneIndex >= possibleCardsOne.length) {
        randomCardOneIndex--
    }
    const randomCardOne = possibleCardsOne[randomCardOneIndex].id

    console.log(`Getting cards in the year ${randomYearTwo}...`)
    const possibleCardsTwo = await getCardsByYear(randomYearTwo, token)
    if (possibleCardsTwo === null) {
        console.log('No cards found for the year! Skipping card battle for today...')
        return
    }
    console.log(`Found ${possibleCardsTwo.length} cards for today's battle! Choosing one at random for spot 2...`)
    let randomCardTwoIndex = Math.floor(Math.random() * possibleCardsTwo.length);
    if (randomCardTwoIndex >= possibleCardsTwo.length) {
        randomCardTwoIndex--
    }
    if (randomCardTwoIndex === randomCardOneIndex) {
        randomCardTwoIndex = randomCardOneIndex === 0 ? 1 : randomCardTwoIndex - 1
    }
    const randomCardTwo = possibleCardsTwo[randomCardTwoIndex].id

    console.log('Cards selected! Creating new card battle!')
    await createCardBattle(randomCardOne, randomCardTwo, token)
    console.log('New card battle created!')

    console.log('Expiring all previous card battles!')
    const expiredCount = await expireCardBattles(token)
    console.log(`Expired ${expiredCount} card battles! Daily Card Battle scheduler successfully completed!`)
}

module.exports = { createDailyCardBattle }