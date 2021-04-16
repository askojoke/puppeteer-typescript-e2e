import { ElementsPage } from "../pages/ElementsPage";
import { BasePage } from "../pages/BasePage"

const basePage: BasePage = new BasePage;
const elementsPage: ElementsPage = new ElementsPage;
const baseUrl: string = URL.toString(); 

describe('Elements', () => {
    beforeEach(async () => {
        await page.goto(baseUrl);
        await basePage.isUrlEqual(baseUrl);
        await basePage.isPageTitleEqual('ToolsQA');
        await basePage.clickOnCardByName('Elements');

        await page.waitForNavigation();
        await basePage.isUrlEqual(`${baseUrl}elements`);

        await basePage.checkLeftPanelOpened();
    });

    test('should wait for button to be visible in Elements - Dynamic Properties', async () => {
        await basePage.clickLeftPanelNestedButtonByName('Dynamic Properties');

        await elementsPage.waitfor5secButtonVisivle();
    });

    test('should fill dropdown menu in Widgets - Select Menu', async () => {
        await basePage.openLeftPanelMenuByName('Widgets');
        await basePage.clickLeftPanelNestedButtonByName('Select Menu');

        await elementsPage.clickOnDropDown();
        await elementsPage.clickOnDropDownOptionByText('Another root option');
        
        expect(await elementsPage.getDropDownValue()).toMatch('Another root option')
    });
});
 