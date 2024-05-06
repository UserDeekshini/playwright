import { test as baseTest, expect as baseExpect } from '@playwright/test';
import { OHRMLoginPage} from '../../pages/OHRMPages/OHRMLoginPage.pages';
import LoginOHRM from './OHRMLoginFixture';
import {OHRMPimPage} from '../../pages/OHRMPages/OHRMPimPage.pages'

type pages = {

OHRMLoginPage: OHRMLoginPage;
loginOHRM: LoginOHRM; 
OHRMPimPage: OHRMPimPage;
 
};

const testPages = baseTest.extend<pages>({
  OHRMLoginPage: async ({ page }, use) => {
    await use(new OHRMLoginPage(page));
  },
  
  loginOHRM: async ({ page }, use) => {
    await use(new LoginOHRM(page));
  },

  OHRMPimPage: async ({ page }, use) => {
    await use(new OHRMPimPage(page));
  },

});

const test = testPages;
const testExpect = testPages;

export { test, testExpect };
