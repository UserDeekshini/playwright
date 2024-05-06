import { Page } from 'playwright/test';
import { jobcreationData, surveyData } from '../fixtures/JobCreationSurvey.data';
import ActionUtil from '../util/UI/ActionUtil';
import UIUtil from '../util/UI/UIUtil';
import LocatorUtil from '../util/UI/ElementUtil';
import JobCreationLocator from '../locators/JobCreation.locator';
import RetryAssertUtil from '../util/Assert/RetryAssetUtil';
import SurveyPageLocator from '../locators/surveyPage.locator';

export class JobCreationPage3 {
  readonly action: ActionUtil;
  readonly ui: UIUtil;
  readonly page: Page;
  readonly locator: LocatorUtil;
  readonly jobCreationPage: JobCreationLocator;
  readonly surveypage: SurveyPageLocator;
  readonly retryAssert: RetryAssertUtil;

  constructor(page: Page) {
    this.page = page;
    this.ui = new UIUtil(this.page);
    this.action = new ActionUtil(this.page);
    this.jobCreationPage = new JobCreationLocator(this.page);
    this.locator = new LocatorUtil(this.page);
    this.surveypage = new SurveyPageLocator(this.page);
    this.retryAssert = new RetryAssertUtil();
  }

  async loginAccount(username: string, password: string) {
    await this.action.sendKeys('fill', this.jobCreationPage.USERNAME, username);
    await this.action.sendKeys('fill', this.jobCreationPage.PASSWORD, password);
    await this.action.click('click', this.jobCreationPage.SIGNIN_BUTTON);
    await this.ui.waitForElement(this.page, 'load', 'networkidle');
  }

  async createJob() {
    await this.action.sendKeys('fill', this.jobCreationPage.JOB_NAME, jobcreationData.jobname);
    await this.action.dropDown(this.jobCreationPage.JOB_TYPE, jobcreationData.jobtype);
    await this.action.sendKeys(
      'fill',
      this.jobCreationPage.JOB_ADDRESS,
      jobcreationData.jobAddress2
    );
    await this.action.click('click', this.jobCreationPage.JOB_ADDRESS_OPTION);
    await this.action.sendKeys(
      'fill',
      this.jobCreationPage.JOB_PROJECTED_PASSINGS,
      jobcreationData.jobProjectedPassingsValue
    );
    await this.action.click('click', this.jobCreationPage.CREATE_JOB);
  }

  async prismId() {
    const prismId = await this.ui.retrieveValue(
      this.page.getByRole('heading', { name: 'PRISM ID: ' }),
      'innerText'
    );
    return `${prismId}`.split(' ')[2];
  }

  async submitJobForSurvey() {
    await this.action.click('click', this.jobCreationPage.SUBMIT_FOR_SURVEY);
  }

  async surveyHub() {
    await this.action.click('click', this.surveypage.NEAREST_HUB);
    await this.action.click('click', this.surveypage.NEAREST_HUB_VALUE);
    await this.action.click('click', this.surveypage.NEAREST_NODE);
    await this.action.click('click', this.surveypage.NEAREST_NODE_VALUE);
    await this.action.sendKeys(
      'fill',
      this.surveypage.PENETRATION_RATE,
      surveyData.penetrationRateValue
    );
    await this.action.click('click', this.surveypage.SAVE_BUTTON);
    await this.page.waitForTimeout(3000);
  }

  async newSurvey() {
    await this.action.click('click', this.surveypage.NEW_SURVEY_BUTTON);
    await this.action.sendKeys('fill', this.surveypage.SURVEY_NAME, surveyData.surveyname);
    await this.action.dropDown(this.surveypage.ARCHITECTURE_TYPE, surveyData.architectureType);
    await this.action.sendKeys('fill', this.surveypage.DESCRIPTION, surveyData.description);
    await this.action.click('click', this.surveypage.NEAREST_HUB);
    await this.retryAssert.toBeVisible(this.surveypage.SAVE_BUTTON);
    await this.action.click('click', this.surveypage.SAVE_BUTTON);
  }

  async costDriver() {
    await this.retryAssert.toBeVisible(this.surveypage.COST_DRIVERS);
    await this.action.click('click', this.surveypage.COST_DRIVERS);
    await this.retryAssert.toBeVisible(this.surveypage.COST_DRIVER_COUNT);
    await this.action.click('click', this.surveypage.COST_DRIVER_COUNT);
    await this.action.sendKeys('fill', this.surveypage.NEW_QUANTITY_OLT, surveyData.newValue);
    await this.action.click('click', this.surveypage.COUNT_SAVE_CHANGE_BUTTON);
  }

  async addFootage() {
    await this.retryAssert.toBeVisible(this.surveypage.ADD_FOOTAGE_OPTION);
    await this.action.click('click', this.surveypage.ADD_FOOTAGE_OPTION);
    await this.action.click('click', this.surveypage.FOOTAGE_TYPE);
    await this.action.dropDown(this.surveypage.FOOTAGE_TYPE_OPTIONS, surveyData.footageType);

    if (surveyData.footageType == 'Underground Fiber') {
      await this.action.dropDown(this.surveypage.FIBER_COUNT, surveyData.fiberCount);
    }

    if (surveyData.footageType == 'Underground Coax') {
      await this.action.dropDown(this.surveypage.COAX_SIZE, surveyData.coaxsize);
    }

    await this.action.click('click', this.surveypage.ACTIVITY_TYPE);
    await this.action.click('click', this.surveypage.CONDUICT_VACANT);
    await this.action.click('click', this.surveypage.RIGHT_OF_WAY);
    await this.action.sendKeys('fill', this.surveypage.FOOTAGE_LENGTH, surveyData.footageLength);
    await this.action.dropDown(this.surveypage.FOOTAGE_DEPTH, surveyData.footageDepth);
    await this.action.click('click', this.surveypage.ADD_FOOTAGE_SAVE_BUTTON);
  }

  async attachDocument() {
    await this.surveypage.DOCUMENT_ATTACH_FILE.click();
    this.page.on('filechooser', async (filechooser) => {
      await filechooser.setFiles([surveyData.uploadFile1, surveyData.uploadFile2]);
    });
    await this.surveypage.DOCUMENT_UPLOAD_FROM_COMPUTER.click({ force: true });
  }

  async documentAttachment() {
    await this.attachDocument();
    await this.surveypage.ATTACHMENT_TYPE.first().selectOption(surveyData.attachmentType1);
    await this.surveypage.ATTACHMENT_TYPE.nth(1).click();
    await this.surveypage.ATTACHMENT_TYPE.nth(1).selectOption(surveyData.attachmentType2);
    await this.action.click('click', this.surveypage.UPLOAD_BUTTON);
  }

  async cancelThisJobButton() {
    await this.action.click('click', this.surveypage.CANCEL_THIS_JOB);
  }

  async cancellationReason() {
    await this.action.dropDown(this.surveypage.CANCELLATION_REASON, surveyData.cancellationReason);
  }

  async goBackButton() {
    await this.action.click('click', this.surveypage.GO_BACK_CANCEL_POPUP);
  }

  async cancelthisJobOption() {
    await this.action.click('click', this.surveypage.CANCEL_THIS_JOB_OPTION);
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
    await this.retryAssert.toBeVisible(this.surveypage.COST_DRIVERS);
    await this.action.click('click', this.surveypage.SURVEY_OVERVIEW_BUTTON);
    await this.retryAssert.toBeHidden(this.surveypage.COST_DRIVERS);
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
    await this.action.click('click', this.surveypage.VALIDATE_AND_SUBMIT_BUTTON);
    await this.retryAssert.toBeHidden(this.surveypage.VALIDATE_AND_SUBMIT_BUTTON);
  }

  async validateAndAcceptSurvey() {
    await this.action.click('click', this.jobCreationPage.VALIDATE_AND_ACCEPT_SURVEY);
  }

  async proceedToDesign() {
    await this.action.click('click', this.jobCreationPage.PROCEED_TO_DESIGN);
  }

  async submitDesignRequest() {
    await this.action.click('click', this.jobCreationPage.SUBMIT_DESIGN_REQUEST);
  }

  async completeDesign() {
    await this.action.click('click', this.jobCreationPage.COMPLETE_DESIGN);
  }

  async commentsInCompleteDesign() {
    await this.action.click('click', this.jobCreationPage.COMMENTS_bOX_COMPLETE_DESIGN);
  }

  async completeDesignPopup() {
    await this.action.click('click', this.jobCreationPage.COMPLETE_DESIGN_POPUP);
  }

  async completeDesignProcess() {
    await this.completeDesign();
    await this.commentsInCompleteDesign();
    await this.completeDesignPopup();
  }

  async acceptDesign() {
    await this.action.click('click', this.jobCreationPage.ACCEPT_dESIGN);
  }

  async validateAndUpdateCost() {
    await this.action.click('click', this.jobCreationPage.VALIDATE_AND_UPDATE_COST);
  }

  async sendForApproval() {
    await this.action.click('click', this.jobCreationPage.SEND_TO_NEXT_APPROVAL);
  }
}
