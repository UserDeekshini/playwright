import { Page } from '@playwright/test';
import { LoginPage3 } from '../pages/JobCreationLoginPage3.pages';
import { JobCreationPage3 } from '../pages/JobCreationPage3.pages';
import { loginData } from './JobCreationLogin.data';

export default class LoginUsers {
  constructor(private page: Page) {}

  public async loginCC(page: Page, prismIDValue: any) {
    const prismlogin = new LoginPage3(this.page);
    await prismlogin.portalURL();
    await prismlogin.loginAccount(loginData.userNameCC, loginData.passwordCC);
    await prismlogin.searchTab(prismIDValue);
    const homePage1Promise = this.page.waitForEvent('popup');
    const searchPage = await homePage1Promise;
    const newPage = new JobCreationPage3(searchPage);
    await newPage.loginAccount(loginData.userNameCC, loginData.passwordCC);
    return newPage;
  }
  async manualIntakeLogin(page: Page) {
    const prismlogin = new LoginPage3(page);
    await prismlogin.portalURL();
    await prismlogin.loginAccount(loginData.userNameCC, loginData.passwordCC);
    await prismlogin.manualIntake();
    const jobcreationPage = await prismlogin.startMenuOption();
    const newPage = new JobCreationPage3(jobcreationPage);
    await newPage.loginAccount(loginData.userNameCC, loginData.passwordCC);
    return newPage;
  }

  public async loginCS(page: Page, prismIDValue: any) {
    const prismlogin = new LoginPage3(page);
    await prismlogin.portalURL();
    await prismlogin.loginAccount(loginData.userNameCS, loginData.passwordCS);
    await prismlogin.searchTab(prismIDValue);
    const homePage1Promise = page.waitForEvent('popup');
    const searchPage = await homePage1Promise;
    const newPage = new JobCreationPage3(searchPage);
    await newPage.loginAccount(loginData.userNameCS, loginData.passwordCS);
    return newPage;
  }
  async loginBPC(page: Page, prismIDValue: any) {
    const prismlogin = new LoginPage3(page);
    await prismlogin.portalURL();
    await prismlogin.loginAccount(loginData.userNameBPC, loginData.passwordBPC);
    await prismlogin.searchTab(prismIDValue);
    const homePage1Promise = page.waitForEvent('popup');
    const searchPage = await homePage1Promise;
    const newPage = new JobCreationPage3(searchPage);
    await newPage.loginAccount(loginData.userNameBPC, loginData.passwordBPC);
    return newPage;
  }

  async loginCM(page: Page, prismIDValue: any) {
    const prismlogin = new LoginPage3(page);
    await prismlogin.portalURL();
    await prismlogin.loginAccount(loginData.userNameCM, loginData.passwordCM);
    await prismlogin.searchTab(prismIDValue);
    const homePage1Promise = page.waitForEvent('popup');
    const searchPage = await homePage1Promise;
    const newPage = new JobCreationPage3(searchPage);
    await newPage.loginAccount(loginData.userNameCM, loginData.passwordCM);
    return newPage;
  }

  async loginCD(page: Page, prismIDValue: any) {
    const prismlogin = new LoginPage3(page);
    await prismlogin.portalURL();
    await prismlogin.loginAccount(loginData.userNameCD, loginData.passwordCD);
    await prismlogin.searchTab(prismIDValue);
    const homePage1Promise = page.waitForEvent('popup');
    const searchPage = await homePage1Promise;
    const newPage = new JobCreationPage3(searchPage);
    await newPage.loginAccount(loginData.userNameCD, loginData.passwordCD);
    return newPage;
  }

  async loginCON(page: Page, prismIDValue: any) {
    const prismlogin = new LoginPage3(page);
    await prismlogin.portalURL();
    await prismlogin.loginAccount(loginData.userNameCON, loginData.passwordCON);
    await prismlogin.searchTab(prismIDValue);
    const homePage1Promise = page.waitForEvent('popup');
    const searchPage = await homePage1Promise;
    const newPage = new JobCreationPage3(searchPage);
    await newPage.loginAccount(loginData.userNameCON, loginData.passwordCON);
    return newPage;
  }
}
