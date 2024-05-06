import { expect, Locator, Page } from 'playwright/test';

export default class OHRMPimPageLocator {
  
    readonly page: Page;
    readonly PIM: Locator;
    readonly ADD_EMPLOYEE_BUTTON: Locator;
    readonly FIRST_NAME: Locator;
    readonly MIDDLE_NAME: Locator;
    readonly LAST_NAME: Locator;
    readonly EMPLOYEE_ID: Locator;
    readonly CREATE_LOGIN_SLIDER: Locator;
    readonly USER_NAME: Locator;
    readonly PASSWORD: Locator;
    readonly CONFIRM_PASSWORD: Locator;
    readonly SAVE_BUTTON: Locator;
    readonly PROFILE_PICTURE: Locator;
    readonly LOGOUT_BUTTON: Locator; 
    readonly EMPLOYEE_LIST: Locator;
    readonly SEARCH_EMPLOYEE_NAME_TEXTBOX: Locator;
    readonly SEARCH_BUTTON: Locator;
    readonly RECORD_FOUND: Locator;

 

    constructor(page: Page) {
        this.page = page;                 
        this.ADD_EMPLOYEE_BUTTON = page.locator('li').filter({ hasText: 'Add Employee' });
        this.PIM = page.getByRole('link', { name: 'PIM' });
        this.FIRST_NAME = page.getByPlaceholder('First Name');
        this.MIDDLE_NAME= page.getByPlaceholder('Middle Name');
        this.LAST_NAME=page.getByPlaceholder('Last Name');
        this.EMPLOYEE_ID=page.locator('form').getByRole('textbox').nth(4)
        this.CREATE_LOGIN_SLIDER= page.locator('form span')
        this.USER_NAME=page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input');
        this.PASSWORD=page.locator('input[type="password"]').first();
        this.CONFIRM_PASSWORD=page.locator('input[type="password"]').nth(1);
        this.SAVE_BUTTON=page.getByRole('button', { name: 'Save' });
        this.PROFILE_PICTURE=page.getByRole('banner').getByRole('img', { name: 'profile picture' });
        this.LOGOUT_BUTTON=page.getByRole('menuitem', { name: 'Logout' }); 
        this.EMPLOYEE_LIST=page.getByRole('link', { name: 'Employee List' })  
        this.SEARCH_EMPLOYEE_NAME_TEXTBOX=page.getByPlaceholder('Type for hints...').first();     
        this.SEARCH_BUTTON= page.getByRole('button', { name: 'Search' })   
        this.RECORD_FOUND=page.getByText('(1) Record Found');      

    }
}