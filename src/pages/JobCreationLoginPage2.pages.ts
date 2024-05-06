import { expect, Locator, Page } from 'playwright/test';
import exp = require('constants');
import LoginPageLocator from '../locators/loginPage.locator';

export class LoginPage2 {
  // prismIDValue: any;
  readonly page: Page;
  readonly loginPage: LoginPageLocator;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPageLocator(this.page);
  }

  async portalURL() {
    await this.page.goto('https://tdb3.dev-prism.corp.chartercom.com/portal/');
  }

  async userName(username: string) {
    await this.loginPage.USERNAME.fill(username);
  }

  async password(password: string) {
    await this.loginPage.PASSWORD.fill(password);
  }

  async loginAccount(username: string, password: string) {
    await this.userName(username);
    await this.password(password);
    await this.loginPage.SIGNIN_BUTTON.click();
    await this.page.waitForLoadState('networkidle');
  }

  async startPage() {
    await this.loginPage.START_OPTION.click();
  }

  async startMenuOption() {
    await this.loginPage.START_MENU_OPTIONS.click();
  }

  async manualIntake() {
    await expect(this.page.locator('#logo')).toBeVisible();
    await this.startPage();
    await this.startMenuOption();
  }

  async searchTab(prismIDValue: string) {
    await this.loginPage.SEARCH_BOX.click();
    await this.loginPage.SEARCH_BOX.fill(prismIDValue);
    await this.page.locator('#logo').click();
    await expect(this.page.locator('.group-name').first()).toBeVisible();
    const searchbar = this.page.locator('.group-name');
    await searchbar.first().click();
    await this.page.getByRole('cell', { name: prismIDValue }).last().click();
  }
  async filterForID() {
    await this.loginPage.ADD_FILTER_BUTTON.click();
    await this.loginPage.ADD_BUTTON.click();
    await this.loginPage.DROPDOWN_SELECT_FILTER.selectOption(' Prism Id ');
  }

  async searchForID(prismIDValue: string) {
    await this.loginPage.SEARCH_BOX.click();
    await this.loginPage.SEARCH_BOX.fill(prismIDValue);
    await this.page.getByRole('cell', { name: prismIDValue }).last().click();
  }
  async searchForIDAssertion(prismIDValue: string) {
    await this.loginPage.SEARCH_BOX.click();
    await this.loginPage.SEARCH_BOX.fill(prismIDValue);
  }
  async searchID(prismIDValue: any) {
    await this.page.getByRole('cell', { name: prismIDValue }).last().click();
  }

  async tasks() {
    await this.page.locator('.task').click();
  }

  async verify() {
    await expect(this.loginPage.START_OPTION).toBeVisible();
  }

  async logout() {
    await this.loginPage.LOGOUT_DROPDOWN.nth(1).click();
    await expect(this.loginPage.LOGOUT_DROPDOWN_VISIBILITY).toBeVisible();
    await this.loginPage.LOGOUT_BUTTON.click();
  }
}
