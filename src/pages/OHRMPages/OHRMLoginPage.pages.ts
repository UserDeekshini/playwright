import { expect, Locator, Page } from "playwright/test";
import ActionUtil from "../../util/UI/ActionUtil";
import UIUtil from "../../util/UI/UIUtil";
import RetryAssertUtil from "../../util/Assert/RetryAssetUtil";
import OHRMLoginPageLocator from "../../locators/OHRMLocators/OHRMLoginPage.locator";
import {OHRMPimPage} from "./OHRMPimPage.pages";

export class OHRMLoginPage {
    readonly page: Page;
    readonly action: ActionUtil;
    readonly ui: UIUtil;
    readonly retryAssertUtil :RetryAssertUtil;
    readonly loginPageLocator: OHRMLoginPageLocator;
  
    constructor(page: Page) {
      this.page = page;
      this.action = new ActionUtil(this.page);
      this.retryAssertUtil=new RetryAssertUtil();
      this.loginPageLocator = new OHRMLoginPageLocator(this.page);
      this.ui = new UIUtil(this.page);
    }

    async portalURL(page: Page, url:string, title:string,description:string) {
        await this.action.launch(page, url, title, description);
    }
    
    async loginAccount(username: string, password: string) {
        await this.action.sendKeys('fill', this.loginPageLocator.USERNAME, username);
        await this.action.sendKeys('fill', this.loginPageLocator.PASSWORD, password);
        await this.action.click('Click', this.loginPageLocator.LOGIN_BUTTON);
        await this.ui.waitForElement(this.page, 'load', 'networkidle');               
   
      }

      async verifySuccessLogin()
      {
         await this.retryAssertUtil.toBeVisible(this.loginPageLocator.DASHBOARD,false);
      }

      async clickPimLink(){
        await this.action.click('click', this.loginPageLocator.PIM);
        return new OHRMPimPage(this.page);
        
      }

    
        
}

