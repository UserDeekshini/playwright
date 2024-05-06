import { test as baseTest, expect as baseExpect } from '@playwright/test';
import { LoginPage3 } from '../pages/JobCreationLoginPage3.pages';
import { JobCreationPage3 } from '../pages/JobCreationPage3.pages';
import LoginUsers from './JobCreationLoginFixture3';
import { LoginPage2 } from '../pages/JobCreationLoginPage2.pages';
import { JobCreationPage2 } from '../pages/JobCreationPage2.pages';
import { loginUser } from './JobCreationLoginFunctions';
import LoginOHRM from './OHRM/OHRMLoginFixture';

type pages = {
  loginPage: LoginPage3;
  jobCreationPages: JobCreationPage3;
  loginUsers: LoginUsers;
  loginPage2: LoginPage2;
  jobCreationPage2: JobCreationPage2;
  loginUser: loginUser;
  loginOHRM: LoginOHRM;
 
 
};

const testPages = baseTest.extend<pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage3(page));
  },
  jobCreationPages: async ({ page }, use) => {
    await use(new JobCreationPage3(page));
  },
  loginUsers: async ({ page }, use) => {
    await use(new LoginUsers(page));
  },

  jobCreationPage2: async ({ page }, use) => {
    await use(new JobCreationPage2(page));
  },
  loginPage2: async ({ page, context }, use) => {
    await use(new LoginPage2(page));
  },
  loginUser: async ({ page, context }, use) => {
    await use(new loginUser(page));
  },

  loginOHRM: async ({ page }, use) => {
    await use(new LoginOHRM(page));
  },



});

const test = testPages;
const testExpect = testPages;

export { test, testExpect };
