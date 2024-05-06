import { Page } from '@playwright/test';
import {OHRMLoginPage} from '../../pages/OHRMPages/OHRMLoginPage.pages';
import { OHRMLoginData,OHRMNewEmployeeData } from './OHRMData.data';
import { OHRMPimPage } from '../../pages/OHRMPages/OHRMPimPage.pages';

export default class LoginOHRM {
  
    constructor(private page: Page) {}

  public async loginToOHRM(page: Page) {
    const OHRMlogin = new OHRMLoginPage(this.page);
    await OHRMlogin.portalURL(page,OHRMLoginData.url, OHRMLoginData.title, OHRMLoginData.description);
    await OHRMlogin.loginAccount(OHRMLoginData.userName,OHRMLoginData.password);
    return OHRMlogin;
   }

   public async newUserLogin(page: Page) {
    const OHRMlogin = new OHRMLoginPage(this.page);
    await OHRMlogin.portalURL(page,OHRMLoginData.url, OHRMLoginData.title, OHRMLoginData.description);
    await OHRMlogin.loginAccount(OHRMNewEmployeeData.eUserName,OHRMNewEmployeeData.ePassword);
    return OHRMlogin;
   }

}