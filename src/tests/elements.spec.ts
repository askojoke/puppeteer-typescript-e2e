import { ElementsPage } from "../pages/ElementsPage";
import { BasePage } from "../pages/BasePage"

const basePage: BasePage = new BasePage;
const elementsPage: ElementsPage = new ElementsPage;
const baseUrl: string = URL.toString(); 

describe('Elements', () => {
    beforeEach(async () => {
        await page.goto(baseUrl);
        await basePage.isUrlEqual(baseUrl)
        await basePage.isPageTitleEqual('ToolsQA')
    });

    test('should wait for button to be visible in Elements - Dynamic Properties', async () => {
        await basePage.clickOnCardByName('Elements')

        await page.waitForNavigation();
        await basePage.isUrlEqual(`${baseUrl}elements`);

        await basePage.checkLeftPanelOpened();
        await basePage.clickLeftPanelNestedButtonByName('Dynamic Properties');

        await elementsPage.waitfor5secButtonVisivle()
    });
});
