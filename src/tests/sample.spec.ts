import { BasePage } from "../pages/BasePage"

const basePage: BasePage = new BasePage;
const baseUrl: string = URL.toString(); 

describe('Elements', () => {
    beforeAll(async () => {
        await page.goto(baseUrl);
        await basePage.isUrlEqual(baseUrl)
        await basePage.isPageTitleEqual('ToolsQA')
    });

    test('should click on Elements card', async () => {
        await basePage.clickOnCardByName('Elements')
    });

    test('should open Elements page', async () => {
        await page.waitForNavigation();
        await basePage.isUrlEqual(`${baseUrl}elements`);
    });
});
