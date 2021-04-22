export class AlertsWindowsPage {
    private smallModal: string = '#showSmallModal';
    private largeModal: string = '#showLargeModal';
    private popUp: string = 'div.h4';
    private closeSmallModalButton: string = '#closeSmallModal';
    private closeLargeModalButton: string = '#closeLargeModal';
    private popUpText: string = '.modal-body';

    public async openSmallModal(): Promise<void> {
        await expect(page).toClick(this.smallModal);
        await expect(page).toMatchElement(this.popUp, { text: 'Small Modal' });
    }

    public async closeSmallModal(): Promise<void> {
        await expect(page).toClick(this.closeSmallModalButton);
        await expect(page).not.toMatchElement(this.closeSmallModalButton)
    }

    public async openLargeModal(): Promise<void> {
        await expect(page).toClick(this.largeModal);
        await expect(page).toMatchElement(this.popUp, { text: 'Large Modal' });
    }

    public async closeLargeModal(): Promise<void> {
        await expect(page).toClick(this.closeLargeModalButton);
        await expect(page).not.toMatchElement(this.closeLargeModalButton)
    }

    public async getPopUpText(): Promise<string | null> {
        var elemText = await page.$eval(this.popUpText,
            item => item.textContent);
        return elemText;
    }
}