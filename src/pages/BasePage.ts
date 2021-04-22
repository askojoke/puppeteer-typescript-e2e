import { ElementHandle } from "puppeteer"

export class BasePage {
    private leftPanelMenu: string = '.menu-list';
    private leftPanelButton: string = '.header-text';
    private leftPanelNestedButton: string = 'div.show .btn-light span';

    public async isPageTitleEqual(title: string): Promise<void> {
        return expect(page.title()).resolves.toMatch(title);
    }

    public async isUrlEqual(url: string): Promise<void> {
        return expect(page.url()).toMatch(url);
    }

    public async clickOnCardByName(name: string): Promise<void> {
        return expect(page).toClick('h5', { text: name })
    }

    public async checkLeftPanelOpened(): Promise<ElementHandle<Element>> {
        return expect(page).toMatchElement(this.leftPanelMenu, { visible: true })
    }

    public async clickLeftPanelNestedButtonByName(name: string): Promise<void> {
        return expect(page).toMatchElement(this.leftPanelNestedButton, { text: name, timeout: 2000 }).then(button => {
            return button.click();
        });
    }

    public async openLeftPanelMenuByName(name: string): Promise<ElementHandle<Element>> {
        await expect(page).toClick(this.leftPanelButton, { text: name });
        return expect(page).toMatchElement('.show');
    }
}