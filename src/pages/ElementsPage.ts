import { ElementHandle } from "puppeteer"

export class ElementsPage {
    public visibleAfter5secButton: string = 'button#visibleAfter'

    public async waitfor5secButtonVisivle(): Promise<ElementHandle<Element>> {
        return expect(page).toMatchElement(this.visibleAfter5secButton, { visible: true, timeout: 6000 }) 
    } 
}