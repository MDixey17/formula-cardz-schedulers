const cron = require("node-cron");
const {getRecentEbaySales} = require("./schedulers/getMarketPrices");
const {createDailyCardBattle} = require("./schedulers/dailyCardBattle");
const env = require("dotenv").config();

// Cron: Every day at 2am - offset for server location
// 0 2 * * *
cron.schedule("0 18 * * *", () => {
    getRecentEbaySales();
});

// Cron: Every day at midnight - offset for server location
// 0 0 * * *
cron.schedule("0 5 * * *", () => {
    createDailyCardBattle();
})
