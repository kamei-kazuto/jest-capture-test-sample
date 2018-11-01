test('ScreenShot Test', async () => {
    const page = await browser.newPage()
    await page.goto('https://www.google.com/')
    const image = await page.screenshot();
    await expect(image).toMatchImageSnapshot();
})