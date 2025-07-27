const puppeteer = require("puppeteer-extra");
const {delay} = require("./utils/utils");
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const fs = require('fs')

async function scrapeSoldItems(searchTerm) {
    const browser = await puppeteer.launch({
        executablePath: process.env.NODE_ENV === "production"
            ? process.env.PUPPETEER_EXECUTABLE_PATH
            : puppeteer.executablePath(),
        args: ["--no-sandbox", "--disable-setuid-sandbox", "--single-process", "--no-zygote"],
        headless: 'new',
    });

    // Give 10 seconds for the window to start up correctly
    await delay(10000)

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

async function getPsaOneOfOneReport(psaUrl, searchTerm) {
    puppeteer.use(StealthPlugin())
    const browser = await puppeteer.launch({
        executablePath: process.env.NODE_ENV === "production"
            ? process.env.PUPPETEER_EXECUTABLE_PATH
            : puppeteer.executablePath(),
        args: ["--no-sandbox", "--disable-setuid-sandbox", "--single-process", "--no-zygote"],
        headless: 'new'
    });

    const [page] = await Promise.all([
        new Promise(resolve => browser.once('targetcreated', target => resolve(target.page()))),
        browser.newPage()
    ]);

    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');
    await page.setViewport({ width: 1280, height: 800 });

    let capturedResponse = null

    try {
        page.on('response', async (response) => {
            const req = response.request();
            const url = response.url();
            const postData = req.postData();
            const params = new URLSearchParams(postData);
            const searchValue = params.get("search")

            // Uncomment for debugging
            // if (url.includes('/Pop/GetSetItems')) {
            //     console.log(`Status: ${response.status()}`);
            //     console.log(`Content-Type: ${response.headers()['content-type']}`)
            //     console.log(`Post Data: ${req.postData()}`)
            //     console.log(`Search Value: ${searchValue}`)
            //     console.log(`Search Term: ${searchTerm}`)
            // }

            if (
                url.includes('/Pop/GetSetItems') &&
                req.method() === 'POST' &&
                searchValue && searchValue.toLowerCase() === searchTerm.toLowerCase()
            ) {
                try {
                    const status = response.status();
                    const contentType = response.headers()['content-type'];

                    if (status === 200 && contentType.includes('application/json')) {
                        const json = await response.json();
                        capturedResponse = json;
                    } else {
                        const text = await response.text();
                        console.error('⚠️ Received non-JSON response:', text.substring(0, 300));
                    }
                } catch (err) {
                    console.error('❌ Error reading response:', err);
                }
            }
        });

        await page.goto(psaUrl, { waitUntil: 'networkidle2', timeout: 60000 });

        await page.waitForSelector('input[placeholder="Search"]', { timeout: 10000 });
        await page.type('input[placeholder="Search"]', searchTerm);

        await delay(10000)

        await page.click('button.btn-default');
    } catch (err) {
        console.error('❌ Error scraping PSA:', err);
    } finally {
        await browser.close();
    }

    if (capturedResponse) {
        return capturedResponse.data.map(item => ({
            cardNumber: item.Variety.toLowerCase().includes('sp-') || item.Variety.toLowerCase().includes('ssp-') ? `${item.CardNumber}a` : item.CardNumber,
            driverName: item.SubjectName,
            parallel: item.Variety
        }))
    } else {
        console.error('❌ Could not capture the data from PSA.');
    }
    return [];
}

module.exports = { scrapeSoldItems, getPsaOneOfOneReport };
