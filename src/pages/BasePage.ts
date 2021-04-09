import { ElementHandle } from "puppeteer"

export class BasePage {

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
        return expect(page).toMatchElement('.menu-list', { visible: true })
    }

    public async clickLeftPanelNestedButtonByName(name: string): Promise<void> {
        return expect(page).toClick('.btn-light span', { text: name })
    }
}