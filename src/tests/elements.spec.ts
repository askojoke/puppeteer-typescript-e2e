import { ElementsPage } from "../pages/ElementsPage";
import { BasePage } from "../pages/BasePage"

const basePage: BasePage = new BasePage;
const elementsPage: ElementsPage = new ElementsPage;
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

    test('should open Elements left panel menu', async () => {
        await elementsPage.checkLeftPanelOpened();
        await elementsPage.clickLeftPanelNestedButtonByName('Dynamic Properties');
    });

    test('should wait Visible After 5 Seconds button', async () => {
        await elementsPage.waitfor5secButtonVisivle()
    });
});
