import { expect, Locator, Page } from 'playwright/test';
import { homePageData } from '../fixtures/JobCreationLogin.data';

export default class LoginPageLocator {
  // prismIDValue: any;
  readonly page: Page;
  readonly USERNAME: Locator;
  readonly PASSWORD: Locator;
  readonly SIGNIN_BUTTON: Locator;
  readonly START_OPTION: Locator;
  readonly START_MENU_OPTIONS: Locator;
  readonly SEARCH_BOX: Locator;
  readonly ADD_FILTER_BUTTON: Locator;
  readonly ADD_BUTTON: Locator;
  readonly DROPDOWN_SELECT_FILTER: Locator;
  readonly LOGOUT_DROPDOWN: Locator;
  readonly LOGOUT_DROPDOWN_VISIBILITY: Locator;
  readonly LOGOUT_BUTTON: Locator;

  constructor(page: Page) {
    this.page = page;
    (this.USERNAME = page.locator('#username')),
      (this.PASSWORD = page.locator('#password')),
      (this.SIGNIN_BUTTON = page.getByRole('button', { name: 'Sign in' }));
    this.START_OPTION = page.getByRole('button', { name: 'Start ' });
    this.START_MENU_OPTIONS = page.getByRole('menuitem', { name: homePageData.startOptions });
    (this.SEARCH_BOX = page.locator('#search')),
      (this.ADD_FILTER_BUTTON = page.locator('.expand-icon'));
    this.ADD_BUTTON = page.locator('span.fa.fa-plus');
    this.DROPDOWN_SELECT_FILTER = page.locator('.form-select.ng-pristine.ng-valid.ng-touched');
    this.LOGOUT_DROPDOWN = page.locator("//span[contains(@class, 'fa fa-caret-down')]");
    this.LOGOUT_DROPDOWN_VISIBILITY = page.locator(
      "//span[contains(@class,'fa fa-caret-down') and ancestor::li[contains(@class, 'open')]]"
    );
    this.LOGOUT_BUTTON = page.locator("//a[text()=' Logout ']");
  }
}
