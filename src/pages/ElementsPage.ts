import { ElementHandle } from "puppeteer"

export class ElementsPage {
    private visibleAfter5secButton: string = 'button#visibleAfter'
    private selectOptionDropDown: string = '#withOptGroup';
    private dropdownOption: string = 'div[class*="menu"] div[class*="option"]';
    private dropDownValue: string = '#withOptGroup div[class*="singleValue"]';

    public async waitfor5secButtonVisivle(): Promise<ElementHandle<Element>> {
        return expect(page).toMatchElement(this.visibleAfter5secButton, { visible: true, timeout: 6000 });
    } 

    public async clickOnDropDown(): Promise<void> {
        return expect(page).toClick(this.selectOptionDropDown);
    }

    public async clickOnDropDownOptionByText(text: string): Promise<void> {
        return expect(page).toClick(this.dropdownOption, {text: text});
    }

    public async getDropDownValue(): Promise<string | null> {
        var elemText = await page.$eval(this.dropDownValue,
            item => item.textContent)
        return elemText;
    }
}