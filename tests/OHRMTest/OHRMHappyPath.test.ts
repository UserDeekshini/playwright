import { test, testExpect } from '../../src/fixtures/OHRM/OHRMPageFixture';
import { OHRMPimPage } from '../../src/pages/OHRMPages/OHRMPimPage.pages';
import { OHRMLoginPage } from '../../src/pages/OHRMPages/OHRMLoginPage.pages';
import { OHRMLoginData } from '../../src/fixtures/OHRM/OHRMData.data';
import { Page } from 'playwright';
import LoginOHRM from '../../src/fixtures/OHRM/OHRMLoginFixture';


test.describe.configure({mode : 'serial'})
test.describe('PIM - Personal Information Management Module', () => {  
           
 
     test('Adding new Employee to HRM', async ({ page , loginOHRM}) => {
      const pg= await loginOHRM.loginToOHRM(page);
      const pimPage=await pg.clickPimLink();      
      await pimPage.clickAddEmployeeLink();  
      await pimPage.addNewEmployee();

     });
     
     test('Verify new employee Login', async ({ page, loginOHRM }) => {
      const pg = await loginOHRM.newUserLogin(page);
      pg.verifySuccessLogin();
      
     });

     test('Search for newly added employee', async ({ page, loginOHRM }) => {
      const pg= await loginOHRM.loginToOHRM(page);
      const pimPage=await pg.clickPimLink();
      await pimPage.clickAddEmployeeLink();
      await pimPage.searchForEmployee();   
   

     
      
     });
     
     
   
});




