const cron = require("node-cron");
const {getRecentEbaySales} = require("./schedulers/getMarketPrices");
const env = require("dotenv").config();

// Cron: Every day at 9am
cron.schedule("0 9 * * 3", () => {
    getRecentEbaySales();
});
