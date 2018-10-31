const captureTest = async (url) => {
    const page = await browser.newPage()
    await page.goto(url)
    const image = await page.screenshot();
    await expect(image).toMatchImageSnapshot();
}

test('ScreenShot Test', async () => {
    captureTest('https://www.google.com/')
})