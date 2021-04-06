import { ElementHandle } from "puppeteer"

export class ElementsPage {
    public visibleAfter5secButton: string = 'button#visibleAfter'

    public async checkLeftPanelOpened(): Promise<ElementHandle<Element>> {
        return expect(page).toMatchElement('.menu-list', { visible: true })
    }

    public async clickLeftPanelNestedButtonByName(name: string): Promise<void> {
        return expect(page).toClick('.btn-light span', { text: name })
    }

    public async waitfor5secButtonVisivle(): Promise<ElementHandle<Element>> {
        return expect(page).toMatchElement(this.visibleAfter5secButton, { visible: true, timeout: 6000 }) 
    } 
}