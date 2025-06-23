const puppeteer = require("puppeteer");
const dayjs = require("dayjs");

async function scrapeSoldItems(searchTerm) {
    const browser = await puppeteer.launch({
        executablePath: process.env.NODE_ENV === "production"
            ? process.env.PUPPETEER_EXECUTABLE_PATH
            : puppeteer.executablePath(),
        args: ["--no-sandbox", "--disable-setuid-sandbox", "--single-process", "--no-zygote"],
    });
    const page = await browser.newPage();

    // Replace spaces with "+" for the query
    const query = encodeURIComponent(searchTerm);
    const url = `https://www.ebay.com/sch/i.html?_nkw=${query}&LH_Sold=1&LH_Complete=1&_ipg=240`;

    await page.goto(url, { waitUntil: "networkidle2" });

    const items = await page.evaluate(() => {
        const itemElements = document.querySelectorAll(".s-item");
        const results = [];

        itemElements.forEach((item) => {
            const title = item.querySelector(".s-item__title")?.textContent;
            const price = item.querySelector(".s-item__price")?.textContent;
            const date = item.querySelector(".s-item__caption--signal")?.textContent.substring(5);

            if (title && price && date && title !== 'Shop on eBay') {
                results.push({ title, price: parseFloat(price.replace(/[^\d.]/g, '')), date });
            }
        });

        return results;
    });

    await browser.close();
    return items;
}

module.exports = { scrapeSoldItems };
