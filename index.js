const cron = require("node-cron");
const {getRecentEbaySales} = require("./schedulers/getMarketPrices");
const {createDailyCardBattle} = require("./schedulers/dailyCardBattle");
const {runHealthCheck} = require("./schedulers/health");
const {getRecentEbaySalesForHighEndSets} = require("./schedulers/getMarketPricesForHighEndSets");
const {getAllOneOfOnes} = require("./schedulers/getAllOneOfOnes");
const env = require("dotenv").config();

// Cron: Every day at 2am - offset for UTC
// 0 7 * * *
cron.schedule("23 18 * * *", () => {
    getRecentEbaySales();
});

// Cron: Every day at midnight - offset for UTC
// 0 5 * * *
cron.schedule("0 5 * * *", () => {
    createDailyCardBattle();
})

// Cron: Every 5 minutes - run health check to keep API running at all times
// */5 * * * *
cron.schedule("*/5 * * * *", () => {
    runHealthCheck()
})

// Cron: Every day at noon - offset for UTC
// 0 17 * * *
cron.schedule("0 17 * * *", () => {
    getRecentEbaySalesForHighEndSets()
})

// Cron: Every day at 4pm CST - offset for UTC
// 0 21 * * *
cron.schedule("0 21 * * *", () => {
    getAllOneOfOnes()
})
