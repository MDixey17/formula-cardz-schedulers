const puppeteer = require("puppeteer-core");
const chromium = require("chrome-aws-lambda");

async function scrapeSoldItems(searchTerm) {
    const browser = await puppeteer.launch({
        executablePath: await chromium.executablePath || 'usr/bin/google-chrome',
        args: chromium.args,
        headless: chromium.headless
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
