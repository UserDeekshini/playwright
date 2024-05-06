import { expect, Locator, Page } from 'playwright/test';
import { surveyData } from '../fixtures/JobCreationSurvey.data';
import { jobcreationData } from '../fixtures/JobCreationSurvey.data';
import JobCreationLocator from '../locators/JobCreation.locator';
import SurveyPageLocator from '../locators/surveyPage.locator';

export class JobCreationPage2 {
  prismIDValue: any;
  readonly page: Page;
  readonly jobCreationPage: JobCreationLocator;
  readonly surveyPage: SurveyPageLocator;

  constructor(page: Page) {
    this.page = page;
    this.jobCreationPage = new JobCreationLocator(this.page);
    this.surveyPage = new SurveyPageLocator(this.page);
  }
  async loginAccount(username: string, password: string) {
    await this.jobCreationPage.USERNAME.fill(username);
    await this.jobCreationPage.PASSWORD.fill(password);
    await this.jobCreationPage.SIGNIN_BUTTON.click();
  }

  async createJob() {
    await this.jobCreationPage.JOB_NAME.fill(jobcreationData.jobname);
    await this.jobCreationPage.JOB_TYPE.selectOption(jobcreationData.jobtype);
    // await this.page1.locator(this.JobCreationLocators.constructionType).selectOption(constructiontype)
    await this.jobCreationPage.JOB_ADDRESS.fill(jobcreationData.jobAddress2);
    await this.jobCreationPage.JOB_ADDRESS_OPTION.click();
    await this.jobCreationPage.JOB_PROJECTED_PASSINGS.fill(
      jobcreationData.jobProjectedPassingsValue
    );
    await this.jobCreationPage.CREATE_JOB.click();
  }

  async prismId() {
    const prismId = await this.page.getByRole('heading', { name: 'PRISM ID:' }).innerText();
    console.log(prismId);
    const prismIDsplit = await prismId.split(' ');
    console.log(prismIDsplit);
    const prismIDValue = prismIDsplit[2];
    return prismIDValue;
  }

  async surveyHub() {
    await this.surveyPage.NEAREST_HUB.click();
    await this.surveyPage.NEAREST_HUB_VALUE.click();
    await this.surveyPage.NEAREST_NODE.click();
    await this.surveyPage.NEAREST_NODE_VALUE.click();
    await this.surveyPage.PENETRATION_RATE.fill(surveyData.penetrationRateValue);
    await this.surveyPage.SAVE_BUTTON.click();
    await this.page.waitForTimeout(3000);
  }

  async newSurvey() {
    await this.surveyPage.NEW_SURVEY_BUTTON.click();
    await this.surveyPage.SURVEY_NAME.fill(surveyData.surveyname);
    await this.surveyPage.ARCHITECTURE_TYPE.selectOption(surveyData.architectureType);
    await this.surveyPage.DESCRIPTION.fill(surveyData.description);
    await expect(this.surveyPage.SAVE_BUTTON).toBeVisible();
    await this.surveyPage.SAVE_BUTTON.click();
  }

  async costDriver() {
    await expect(this.surveyPage.COST_DRIVERS).toBeVisible();
    await this.surveyPage.COST_DRIVERS.click();
    await expect(this.surveyPage.COST_DRIVER_COUNT).toBeVisible();
    await this.surveyPage.COST_DRIVER_COUNT.click();
    await this.surveyPage.NEW_QUANTITY_OLT.fill(surveyData.newValue);
    await this.surveyPage.COUNT_SAVE_CHANGE_BUTTON.click();
  }

  async addFootage() {
    await expect(this.surveyPage.ADD_FOOTAGE_OPTION).toBeVisible();
    await this.surveyPage.ADD_FOOTAGE_OPTION.click();
    await this.surveyPage.FOOTAGE_TYPE.click();
    await this.surveyPage.FOOTAGE_TYPE_OPTIONS.selectOption(surveyData.footageType);

    if (surveyData.footageType == 'Underground Fiber') {
      await this.surveyPage.FIBER_COUNT.selectOption(surveyData.fiberCount);
    }

    if (surveyData.footageType == 'Underground Coax') {
      await this.surveyPage.COAX_SIZE.selectOption(surveyData.coaxsize);
    }
    await this.surveyPage.ACTIVITY_TYPE.click();
    await this.surveyPage.CONDUICT_VACANT.click();
    await this.surveyPage.RIGHT_OF_WAY.click();
    await this.surveyPage.FOOTAGE_LENGTH.fill(surveyData.footageLength);
    await this.surveyPage.FOOTAGE_DEPTH.selectOption(surveyData.footageDepth);
    await this.surveyPage.ADD_FOOTAGE_SAVE_BUTTON.click();
  }

  async attachDocument() {
    await this.surveyPage.DOCUMENT_ATTACH_FILE.click();
    this.page.on('filechooser', async (filechooser) => {
      await filechooser.setFiles([surveyData.uploadFile1, surveyData.uploadFile2]);
    });
    await this.surveyPage.DOCUMENT_UPLOAD_FROM_COMPUTER.click({ force: true });
  }

  async documentAttachment() {
    await this.attachDocument();
    await this.surveyPage.ATTACHMENT_TYPE.first().selectOption(surveyData.attachmentType1);
    await this.surveyPage.ATTACHMENT_TYPE.nth(1).click();
    await this.surveyPage.ATTACHMENT_TYPE.nth(1).selectOption(surveyData.attachmentType2);
    await this.surveyPage.UPLOAD_BUTTON.click();
  }

  async cancelThisJobButton() {
    await this.surveyPage.CANCEL_THIS_JOB.click();
  }

  async cancellationReason() {
    await this.surveyPage.CANCELLATION_REASON.selectOption(surveyData.cancellationReason);
  }

  async goBackButton() {
    await this.surveyPage.GO_BACK_CANCEL_POPUP.click();
  }

  async cancelthisJobOption() {
    await this.surveyPage.CANCEL_THIS_JOB_OPTION.click();
  }

  async cancelJob() {
    await this.cancelThisJobButton();
    await this.cancellationReason();
    await this.cancelthisJobOption();
  }

  async goBackInCancelJob() {
    await this.cancelThisJobButton();
    await this.goBackButton();
  }

  async surveyOverviewbutton() {
    await expect(this.surveyPage.COST_DRIVERS).toBeVisible();
    await this.surveyPage.SURVEY_OVERVIEW_BUTTON.click();
    await expect(this.surveyPage.COST_DRIVERS).toBeHidden();
  }

  async surveyHeading() {
    await this.page.goto(
      'https://survey-ui3.dev-prism.corp.chartercom.com/task/prepare-survey/construction/f0ce0d05-ea9b-11ee-b66d-b20bfc52a7ea/overview'
    );
    await this.page.getByRole('link', { name: 'Survey' }).click();
  }

  async survey() {
    await this.newSurvey();
    await this.costDriver();
    await this.addFootage();
    await this.documentAttachment();
    await this.surveyOverviewbutton();
  }

  async validateAndSubmitSurvey() {
    await this.surveyPage.VALIDATE_AND_SUBMIT_BUTTON.click();
    await expect(this.surveyPage.VALIDATE_AND_SUBMIT_BUTTON).toBeHidden();
  }

  async submitJobForSurvey() {
    await this.jobCreationPage.SUBMIT_FOR_SURVEY.click();
  }

  async validateAndAcceptSurvey() {
    await this.jobCreationPage.VALIDATE_AND_ACCEPT_SURVEY.click();
  }

  async proceedToDesign() {
    await this.jobCreationPage.PROCEED_TO_DESIGN.click();
  }

  async submitDesignRequest() {
    await this.jobCreationPage.SUBMIT_DESIGN_REQUEST.click();
  }

  async completeDesign() {
    await this.jobCreationPage.COMPLETE_DESIGN.click();
  }

  async commentsInCompleteDesign() {
    await this.jobCreationPage.COMMENTS_bOX_COMPLETE_DESIGN.fill(surveyData.comments);
  }

  async completeDesignPopup() {
    await this.jobCreationPage.COMPLETE_DESIGN_POPUP.click();
  }

  async completeDesignProcess() {
    await this.completeDesign();
    await this.commentsInCompleteDesign();
    await this.completeDesignPopup();
  }

  async acceptDesign() {
    await this.jobCreationPage.ACCEPT_dESIGN.click();
  }

  async validateAndUpdateCost() {
    await this.jobCreationPage.VALIDATE_AND_UPDATE_COST.click();
  }

  async sendForApproval() {
    await this.jobCreationPage.SEND_TO_NEXT_APPROVAL.click();
  }
}
