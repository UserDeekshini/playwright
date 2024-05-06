import { Page } from '@playwright/test';
import { LoginPage2 } from '../pages/JobCreationLoginPage2.pages';
import { JobCreationPage2 } from '../pages/JobCreationPage2.pages';
import { loginData } from './JobCreationLogin.data';

export class loginUser {
  constructor(private page: Page) {}

  async manualIntakeLogin(page: Page) {
    const prismlogin = new LoginPage2(page);
    await prismlogin.portalURL();
    await prismlogin.loginAccount(loginData.userNameCC, loginData.passwordCC);
    await prismlogin.manualIntake();
    const homePage1Promise = page.waitForEvent('popup');
    const jobcreationPage = await homePage1Promise;
    const newPage = new JobCreationPage2(jobcreationPage);
    await newPage.loginAccount(loginData.userNameCC, loginData.passwordCC);
    return newPage;
  }

  public async loginCC(page: Page, prismIDValue: any) {
    const prismlogin = new LoginPage2(page);
    await prismlogin.portalURL();
    await prismlogin.loginAccount(loginData.userNameCC, loginData.passwordCC);
    await prismlogin.searchTab(prismIDValue);
    const homePage1Promise = page.waitForEvent('popup');
    const searchPage = await homePage1Promise;
    const newPage = new JobCreationPage2(searchPage);
    await newPage.loginAccount(loginData.userNameCC, loginData.passwordCC);
    return newPage;
  }

  public async loginCS(page: Page, prismIDValue: any) {
    const prismlogin = new LoginPage2(page);
    await prismlogin.portalURL();
    await prismlogin.loginAccount(loginData.userNameCS, loginData.passwordCS);
    await prismlogin.searchTab(prismIDValue);
    const homePage1Promise = page.waitForEvent('popup');
    const searchPage = await homePage1Promise;
    const newPage = new JobCreationPage2(searchPage);
    await newPage.loginAccount(loginData.userNameCS, loginData.passwordCS);
    return newPage;
  }

  async loginBPC(page: Page, prismIDValue: any) {
    const prismlogin = new LoginPage2(page);
    await prismlogin.portalURL();
    await prismlogin.loginAccount(loginData.userNameBPC, loginData.passwordBPC);
    await prismlogin.searchTab(prismIDValue);
    const homePage1Promise = page.waitForEvent('popup');
    const searchPage = await homePage1Promise;
    const newPage = new JobCreationPage2(searchPage);
    await newPage.loginAccount(loginData.userNameBPC, loginData.passwordBPC);
    return newPage;
  }

  async loginCM(page: Page, prismIDValue: any) {
    const prismlogin = new LoginPage2(page);
    await prismlogin.portalURL();
    await prismlogin.loginAccount(loginData.userNameCM, loginData.passwordCM);
    await prismlogin.searchTab(prismIDValue);
    const homePage1Promise = page.waitForEvent('popup');
    const searchPage = await homePage1Promise;
    const newPage = new JobCreationPage2(searchPage);
    await newPage.loginAccount(loginData.userNameCM, loginData.passwordCM);
    return newPage;
  }

  async loginCD(page: Page, prismIDValue: any) {
    const prismlogin = new LoginPage2(page);
    await prismlogin.portalURL();
    await prismlogin.loginAccount(loginData.userNameCD, loginData.passwordCD);
    await prismlogin.searchTab(prismIDValue);
    const homePage1Promise = page.waitForEvent('popup');
    const searchPage = await homePage1Promise;
    const newPage = new JobCreationPage2(searchPage);
    await newPage.loginAccount(loginData.userNameCD, loginData.passwordCD);
    return newPage;
  }

  async loginCON(page: Page, prismIDValue: any) {
    const prismlogin = new LoginPage2(page);
    await prismlogin.portalURL();
    await prismlogin.loginAccount(loginData.userNameCON, loginData.passwordCON);
    await prismlogin.searchTab(prismIDValue);
    const homePage1Promise = page.waitForEvent('popup');
    const searchPage = await homePage1Promise;
    const newPage = new JobCreationPage2(searchPage);
    await newPage.loginAccount(loginData.userNameCON, loginData.passwordCON);
    return newPage;
  }
}
