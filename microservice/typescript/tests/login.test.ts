import { chromium } from 'playwright';
(async () => {

const browser = await chromium.launch();

const page = await browser.newPage();

await page.goto('https://example.com');

await page.click('text=Login');

await page.fill('input[name="username"]', 'myUser');

await page.fill('input[name="password"]', 'myPassword');

await page.click('text=Submit');

await page.waitForSelector('text=Welcome');

await browser.close();

})();