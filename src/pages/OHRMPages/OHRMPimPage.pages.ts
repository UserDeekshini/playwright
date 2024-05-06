import { expect, Locator, Page } from "playwright/test";
import ActionUtil from "../../util/UI/ActionUtil";
import UIUtil from "../../util/UI/UIUtil";
import RetryAssertUtil from "../../util/Assert/RetryAssetUtil";
import OHRMPimPageLocator from "../../locators/OHRMLocators/OHRMPimPage.locator";
import { OHRMNewEmployeeData } from '../../fixtures/OHRM/OHRMData.data';

export class OHRMPimPage {
    readonly page: Page;
    readonly action: ActionUtil;
    readonly ui: UIUtil;
    readonly retryAssertUtil :RetryAssertUtil;
    readonly pimPageLocator: OHRMPimPageLocator;
  
   
    
    
    constructor(page: Page) {
      this.page = page;
      this.action = new ActionUtil(this.page);
      this.retryAssertUtil=new RetryAssertUtil();
      this.pimPageLocator = new OHRMPimPageLocator(this.page);
      this.ui = new UIUtil(this.page);        


    }
  /*
    async clickPIMLink(){
      await this.action.click('Click', this.pimPageLocator.PIM);
           
    } */

    
   async clickAddEmployeeLink(){
         await this.action.click('Click', this.pimPageLocator.ADD_EMPLOYEE_BUTTON);     
          
    }

 
    async createLoginDetails(){
      await this.action.click('click',this.pimPageLocator.CREATE_LOGIN_SLIDER);
    }

    async saveNewEmployee(){
      await this.action.click('click',this.pimPageLocator.SAVE_BUTTON);
     // await this.page.waitForTimeout(300000);

    }

    async addNewEmployee(){
      await this.action.sendKeys('fill', this.pimPageLocator.FIRST_NAME, OHRMNewEmployeeData.firstName);
      await this.action.sendKeys('fill', this.pimPageLocator.MIDDLE_NAME, OHRMNewEmployeeData.middleName);
      await this.action.sendKeys('fill', this.pimPageLocator.LAST_NAME, OHRMNewEmployeeData.lastName);
      await this.action.sendKeys('fill', this.pimPageLocator.EMPLOYEE_ID, OHRMNewEmployeeData.employeeId);
      await this.createLoginDetails();
      await this.action.sendKeys('fill', this.pimPageLocator.USER_NAME, OHRMNewEmployeeData.eUserName);
      await this.action.sendKeys('fill', this.pimPageLocator.PASSWORD, OHRMNewEmployeeData.ePassword);
      await this.action.sendKeys('fill', this.pimPageLocator.CONFIRM_PASSWORD, OHRMNewEmployeeData.confirmPassword);
      await this.saveNewEmployee();
            
    }

    async clickOnEmployeeList(){
      await this.action.click('Click', this.pimPageLocator.ADD_EMPLOYEE_BUTTON);      
 }
  async searchForEmployee(){
    await this.action.sendKeys('fill', this.pimPageLocator.SEARCH_EMPLOYEE_NAME_TEXTBOX, OHRMNewEmployeeData.firstName);
    await this.action.click('Click',this.pimPageLocator.SEARCH_BUTTON);
    await this.retryAssertUtil.toContainText(this.pimPageLocator.RECORD_FOUND, '(1) Record Found', false); 
    
  }
    

    async logOut(){
      await this.action.click('click', this.pimPageLocator.PROFILE_PICTURE);
      await this.action.click('click', this.pimPageLocator.LOGOUT_BUTTON);
    }
}9