const cron = require("node-cron");
const {getRecentEbaySales} = require("./schedulers/getMarketPrices");
const {createDailyCardBattle} = require("./schedulers/dailyCardBattle");
const {runHealthCheck} = require("./schedulers/health");
const {getRecentEbaySalesForHighEndSets} = require("./schedulers/getMarketPricesForHighEndSets");
const {getAllOneOfOnes} = require("./schedulers/getAllOneOfOnes");
const env = require("dotenv").config();

// Cron: Every day at 2am - offset for UTC
// 0 7 * * *
cron.schedule("0 7 * * *", () => {
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

// Cron: Locally at least once per week
/**
 * There is an issue with scraping the PSA website in a cloud environment where it is very inconsistent with
 * getting population report data. After hours of troubleshooting, I have found that it is best to manage locally
 * as there were no issues with that.
 *
 * I will continue the search for a solution to see if full automation is possible.
 */
// cron.schedule("0 19 * * *", () => {
//     getAllOneOfOnes()
// })
