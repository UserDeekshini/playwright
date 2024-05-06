import { expect, Locator, Page } from 'playwright/test';

export default class OHRMLoginPageLocator {
    // prismIDValue: any;
    readonly page: Page;
    readonly USERNAME: Locator;
    readonly PASSWORD: Locator;
    readonly LOGIN_BUTTON: Locator;
    readonly DASHBOARD: Locator;
    readonly PIM: Locator;
    
 

    constructor(page: Page) {
        this.page = page
        this.USERNAME = page.getByPlaceholder('Username');
        this.PASSWORD = page.getByPlaceholder('Password');
        this.LOGIN_BUTTON = page.locator('button[type=submit]');
        this.DASHBOARD= page.getByRole('heading', { name: 'Dashboard' });
        this.PIM = page.getByRole('link', { name: 'PIM' });  
        

    }
}