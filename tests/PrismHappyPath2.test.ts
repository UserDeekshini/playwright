import { LoginPage2 } from '../src/pages/JobCreationLoginPage2.pages';
import { test, testExpect } from '../src/fixtures/JobCreationPageFixture';

test.describe.configure({ mode: 'serial' });

test.describe('Login Feature', () => {
  let prismIDValue: any = '';

  test('Login For Job Creation Manual Intake with CC', async ({ page, loginUser }) => {
    const newPage = await loginUser.manualIntakeLogin(page);
    await newPage.createJob();
    prismIDValue = await newPage.prismId();
    console.log(prismIDValue);
  });

  test('Login to submit the job for survey with BPC ', async ({ page, loginUser }) => {
    const newPage = await loginUser.loginBPC(page, prismIDValue);
    await newPage.submitJobForSurvey();
  });

  test('Login with CC to Prepare Survey', async ({ page, loginUser }) => {
    const newPage = await loginUser.loginCC(page, prismIDValue);
    await newPage.surveyHub();
    await newPage.survey();
    await newPage.validateAndSubmitSurvey();
  });

  test('Login with CS to Review Survey', async ({ page, loginUser }) => {
    const newPage = await loginUser.loginCS(page, prismIDValue);
    await newPage.validateAndAcceptSurvey();
    await newPage.proceedToDesign();
  });

  test('Login with CC for design', async ({ page, loginUser }) => {
    const newPage = await loginUser.loginCC(page, prismIDValue);
    await newPage.submitDesignRequest();
  });

  test('Login with CC for complete design', async ({ page, loginUser }) => {
    const newPage = await loginUser.loginCC(page, prismIDValue);
    await newPage.completeDesignProcess();
  });

  test('Login with CC for accept design', async ({ page, loginUser }) => {
    const newPage = await loginUser.loginCC(page, prismIDValue);
    await newPage.acceptDesign();
  });

  test('Login with CC for validate and update cost', async ({ page, loginUser }) => {
    const newPage = await loginUser.loginCC(page, prismIDValue);
    await newPage.validateAndUpdateCost();
  });

  test('Login with CS for validate and Accept Survey', async ({ page, loginUser }) => {
    const newPage = await loginUser.loginCS(page, prismIDValue);
    await newPage.validateAndAcceptSurvey();
  });

  test('Login with CM to send for Approval', async ({ page, loginUser }) => {
    const newPage = await loginUser.loginCM(page, prismIDValue);
    await newPage.sendForApproval();
  });

  test('Login with CD to send for 2nd Approval', async ({ page, loginUser }) => {
    const newPage = await loginUser.loginCD(page, prismIDValue);
    await newPage.sendForApproval();
  });

  test('Login with CD to send for 3rd Approval', async ({ page, loginUser }) => {
    const newPage = await loginUser.loginCD(page, prismIDValue);
    await newPage.sendForApproval();
  });

  test('Login with CD to send for 4th Approval', async ({ page, loginUser }) => {
    const newPage = await loginUser.loginCD(page, prismIDValue);
    await newPage.sendForApproval();
  });

  test.afterEach('logout', async ({ page }) => {
    const logout = new LoginPage2(page);
    await logout.logout();
    await page.waitForTimeout(5000);
  });
});
