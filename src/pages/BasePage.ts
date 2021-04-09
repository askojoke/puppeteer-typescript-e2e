import { ElementHandle } from "puppeteer"

export class BasePage {
    private leftPanelMenu: string = '.menu-list';
    private leftPanelButton: string = '.header-text';
    private leftPanelNestedButton: string = '.btn-light span';

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
        return expect(page).toClick('.btn-light span', { text: name })
    }

    public async openLeftPanelMenuByName(name: string): Promise<void> {
        return expect(page).toClick(this.leftPanelButton, { text: name })
    }

    public async clickOnLeftPanelNestedButton(name: string): Promise<void> {
        return expect(page).toClick(this.leftPanelNestedButton, { text: name })
    }
}