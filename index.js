const cron = require("node-cron");
const {getRecentEbaySales} = require("./schedulers/getMarketPrices");
const env = require("dotenv").config();

// Cron: Every day at 1am
// 0 1 * * *
cron.schedule("56 * * * *", () => {
    getRecentEbaySales();
});
