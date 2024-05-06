import { TIMEOUT } from 'dns';
import { expect, Locator, Page } from 'playwright/test';
import { homePageData } from '../fixtures/JobCreationLogin.data';
import ActionUtil from '../util/UI/ActionUtil';
import UIUtil from '../util/UI/UIUtil';
import LocatorUtil from '../util/UI/ElementUtil';
import LoginPageLocator from '../locators/loginPage.locator';
import RetryAssertUtil from '../util/Assert/RetryAssetUtil';

import exp = require('constants');

export class LoginPage3 {
  readonly action: ActionUtil;
  readonly ui: UIUtil;
  readonly page: Page;
  readonly locator: LocatorUtil;
  readonly loginPage: LoginPageLocator;
  readonly retryAssert: RetryAssertUtil;
  // prismIDValue: any;

  constructor(page: Page) {
    this.page = page;
    this.ui = new UIUtil(this.page);
    this.action = new ActionUtil(this.page);
    this.loginPage = new LoginPageLocator(this.page);
    this.locator = new LocatorUtil(this.page);
    this.retryAssert = new RetryAssertUtil();
  }

  async portalURL() {
    this.action.launch(
      this.page,
      'https://tdb3.dev-prism.corp.chartercom.com/portal/',
      'Brazos Portal',
      'Brazos Portal'
    );
  }

  async loginAccount(username: string, password: string) {
    await this.action.sendKeys('fill', this.loginPage.USERNAME, username);
    await this.action.sendKeys('fill', this.loginPage.PASSWORD, password);
    await this.action.click('click', this.loginPage.SIGNIN_BUTTON);
    await this.ui.waitForElement(this.page, 'load', 'networkidle');
  }

  async startPage() {
    await this.action.click('click', this.loginPage.START_OPTION);
  }

  async startMenuOption(): Promise<Page> {
    return await this.action.switchToNewPage(
      this.page,
      this.loginPage.START_MENU_OPTIONS,
      'Please sign in'
    );
  }

  async manualIntake() {
    await this.ui.validation(this.page.locator('#logo'), 'visible');
    await this.startPage();
  }

  async searchTab(prismIDValue: string) {
    await this.action.click('click', this.loginPage.SEARCH_BOX);
    await this.action.sendKeys('fill', this.loginPage.SEARCH_BOX, prismIDValue);
    await this.action.click('click', this.page.locator('#logo'));
    await this.retryAssert.toBeVisible(this.page.locator('.group-name').first());
    const searchbar = this.page.locator('.group-name');
    await searchbar.first().click();
    await this.searchID(prismIDValue);
  }

  async filterForID() {
    await this.action.click('click', this.loginPage.ADD_FILTER_BUTTON);
    await this.action.click('click', this.loginPage.ADD_BUTTON);
    await this.action.dropDown(this.loginPage.DROPDOWN_SELECT_FILTER, ' Prism Id ');
  }

  async searchForID(prismIDValue: string) {
    await this.action.click('click', this.loginPage.SEARCH_BOX);
    await this.action.sendKeys('fill', this.loginPage.SEARCH_BOX, prismIDValue);
    this.searchID(prismIDValue);
  }

  async searchID(prismIDValue: any) {
    (await this.locator.getByRoleOption(this.page, 'cell', { name: prismIDValue }, 'last')).click();
  }

  async tasks() {
    await this.action.click('click', this.page.locator('.task'));
  }

  async backTo() {
    await this.ui.bringPageToFront(this.page);
  }

  async verify() {
    await this.retryAssert.toBeVisible(this.loginPage.START_OPTION);
  }
  async logout() {
    await this.action.click('click', this.loginPage.LOGOUT_DROPDOWN.nth(1));
    await this.ui.validation(this.loginPage.LOGOUT_DROPDOWN_VISIBILITY, 'visible');
    await this.action.click('click', this.loginPage.LOGOUT_BUTTON);
  }
}
