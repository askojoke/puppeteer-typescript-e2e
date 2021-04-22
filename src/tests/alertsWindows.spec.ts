import { ElementsPage } from "../pages/ElementsPage";
import { BasePage } from "../pages/BasePage";
import { AlertsWindowsPage } from "../pages/AlertsWindowsPage";

const basePage: BasePage = new BasePage;
const alertsWindowsPage: AlertsWindowsPage = new AlertsWindowsPage;
const baseUrl: string = URL.toString();

describe('Elements', () => {
    beforeEach(async () => {
        await page.goto(baseUrl);
        await basePage.isUrlEqual(baseUrl);
        await basePage.isPageTitleEqual('ToolsQA');
        await basePage.clickOnCardByName('Alerts, Frame & Windows');

        await page.waitForNavigation();
        await basePage.isUrlEqual(`${baseUrl}alertsWindows`);

        await basePage.checkLeftPanelOpened();
    });

    test('should open popUps in Alerts - Modal Dialogs', async () => {
        await basePage.clickLeftPanelNestedButtonByName('Modal Dialogs');
        await page.waitForNavigation();
        await basePage.isUrlEqual(`${baseUrl}modal-dialogs`);
        
        await alertsWindowsPage.openSmallModal();
        await expect(await alertsWindowsPage.getPopUpText()).toMatch('This is a small modal. It has very less content');
        await alertsWindowsPage.closeSmallModal();

        await alertsWindowsPage.openLargeModal();
        await expect(await alertsWindowsPage.getPopUpText()).toMatch(/Lorem Ipsum is simply dummy text of the printing.*/);
        await alertsWindowsPage.closeLargeModal();
    });
});