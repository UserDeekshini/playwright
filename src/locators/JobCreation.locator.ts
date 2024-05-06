import { expect, Locator, Page } from 'playwright/test';
import { jobcreationData } from '../fixtures/JobCreationSurvey.data';
import { surveyData } from '../fixtures/JobCreationSurvey.data';

export default class JobCreationLocator {
  prismIDValue: any;
  readonly page1: Page;
  readonly USERNAME: Locator;
  readonly PASSWORD: Locator;
  readonly SIGNIN_BUTTON: Locator;
  readonly JOB_NAME: Locator;
  readonly JOB_TYPE: Locator;
  readonly CONSTRUCTION_TYPE: Locator;
  readonly JOB_ADDRESS: Locator;
  readonly JOB_ADDRESS_OPTION: Locator;
  readonly JOB_PROJECTED_PASSINGS: Locator;
  readonly CREATE_JOB: Locator;
  readonly SUBMIT_FOR_SURVEY: Locator;
  readonly VALIDATE_AND_ACCEPT_SURVEY: Locator;
  readonly PROCEED_TO_DESIGN: Locator;
  readonly SUBMIT_DESIGN_REQUEST: Locator;
  readonly COMPLETE_DESIGN: Locator;
  readonly COMMENTS_bOX_COMPLETE_DESIGN: Locator;
  readonly COMPLETE_DESIGN_POPUP: Locator;
  readonly ACCEPT_dESIGN: Locator;
  readonly VALIDATE_AND_UPDATE_COST: Locator;
  readonly SEND_TO_NEXT_APPROVAL: Locator;

  constructor(page1: Page) {
    this.page1 = page1;
    // this.prismIDValue = this.prismIDValue;
    this.USERNAME = page1.locator('#username');
    this.PASSWORD = page1.locator('#password');
    this.SIGNIN_BUTTON = page1.getByRole('button', { name: 'Sign in' });
    this.JOB_NAME = page1.locator('#jobName');
    this.JOB_TYPE = page1.locator('#jobType');
    this.CONSTRUCTION_TYPE = page1.locator('#constructionType');
    this.JOB_ADDRESS = page1.locator('#jobAddressLine1');
    this.JOB_ADDRESS_OPTION = page1.getByRole('option', { name: jobcreationData.jobAddressFull2 });
    this.JOB_PROJECTED_PASSINGS = page1.locator('#jobProjectedPassings');
    this.CREATE_JOB = page1.getByRole('button', { name: 'Create Job' });
    this.SUBMIT_FOR_SURVEY = page1.getByRole('button', { name: ' Submit Job for Survey' });
    this.VALIDATE_AND_ACCEPT_SURVEY = page1.locator(
      "//span[contains(text(),'Validate & Accept Survey')]"
    );
    this.PROCEED_TO_DESIGN = page1.getByRole('button', { name: 'Proceed to Design' });
    this.SUBMIT_DESIGN_REQUEST = page1.getByRole('button', { name: 'Submit Design Request' });
    this.COMPLETE_DESIGN = page1.getByRole('button', { name: 'Complete Design' });
    this.COMMENTS_bOX_COMPLETE_DESIGN = page1.locator(
      'textarea[placeholder="Enter any comments for the Construction Coordinator"]'
    );
    this.COMPLETE_DESIGN_POPUP = page1.getByRole('button', { name: '  Complete Design ' });
    this.ACCEPT_dESIGN = page1.getByRole('button', { name: 'Accept Design' });
    this.VALIDATE_AND_UPDATE_COST = page1.getByRole('button', { name: 'Validate & Update Costs' });
    this.SEND_TO_NEXT_APPROVAL = page1.locator("//span[contains(text(), 'Send to Next Approval')]");
  }
}
