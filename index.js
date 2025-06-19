const cron = require("node-cron");
const {getRecentEbaySales} = require("./schedulers/getMarketPrices");
const {createDailyCardBattle} = require("./schedulers/dailyCardBattle");
const env = require("dotenv").config();

// Cron: Every day at 1am
// 0 1 * * *
cron.schedule("0 1 * * *", () => {
    getRecentEbaySales();
});

// Cron: Every day at midnight
// 0 0 * * *
cron.schedule("0 0 * * *", () => {
    createDailyCardBattle();
})

// getRecentEbaySales()
