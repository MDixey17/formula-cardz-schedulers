const cron = require("node-cron");
const {getRecentEbaySales} = require("./schedulers/getMarketPrices");
const {createDailyCardBattle} = require("./schedulers/dailyCardBattle");
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
