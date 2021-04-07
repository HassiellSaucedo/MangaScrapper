const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://inmanga.com/ver/manga/Berserk/5cc13fca-2e10-41e7-bbca-d70353d6a55a');
  await page.$("#ChaptersContainer")
  await page.screenshot({path:'ss.png' })

  await browser.close()
})();