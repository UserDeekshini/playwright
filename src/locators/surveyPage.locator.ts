import { expect, Locator, Page } from 'playwright/test';
import { surveyData } from '../fixtures/JobCreationSurvey.data';

export default class SurveyPageLocator {
  readonly page1: Page;
  readonly NEAREST_HUB: Locator;
  readonly NEAREST_HUB_VALUE: Locator;
  readonly NEAREST_NODE: Locator;
  readonly NEAREST_NODE_VALUE: Locator;
  readonly PENETRATION_RATE: Locator;
  readonly NEW_SURVEY_BUTTON: Locator;
  readonly SURVEY_NAME: Locator;
  readonly ARCHITECTURE_TYPE: Locator;
  readonly SERVICE_PLANT: Locator;
  readonly PROJECTED_PASSING: Locator;
  readonly DESCRIPTION: Locator;
  readonly SAVE_BUTTON: Locator;
  readonly COST_DRIVERS: Locator;
  readonly COST_DRIVER_COUNT: Locator;
  readonly COST_DRIVER_REMOVE_BUTTON: Locator;
  readonly NEW_QUANTITY_OLT: Locator;
  readonly COUNT_CANCEL_SAVE_BUTTON: Locator;
  readonly COUNT_SAVE_CHANGE_BUTTON: Locator;
  readonly ADD_FOOTAGE_OPTION: Locator;
  readonly FOOTAGE_TYPE: Locator;
  readonly FOOTAGE_TYPE_OPTIONS: Locator;
  readonly ACTIVITY_TYPE: Locator;
  readonly CONDUICT_VACANT: Locator;
  readonly RIGHT_OF_WAY: Locator;
  readonly FOOTAGE_LENGTH: Locator;
  readonly FOOTAGE_DEPTH: Locator;
  readonly FIBER_COUNT: Locator;
  readonly COAX_SIZE: Locator;
  readonly ADD_FOOTAGE_SAVE_BUTTON: Locator;
  readonly DOCUMENT_ATTACH_FILE: Locator;
  readonly DOCUMENT_UPLOAD_FROM_COMPUTER: Locator;
  readonly ATTACHMENT_TYPE: Locator;
  readonly UPLOAD_BUTTON: Locator;
  readonly SURVEY_OVERVIEW_BUTTON: Locator;
  readonly CANCEL_THIS_JOB: Locator;
  readonly CANCELLATION_REASON: Locator;
  readonly GO_BACK_CANCEL_POPUP: Locator;
  readonly CANCEL_THIS_JOB_OPTION: Locator;
  readonly VALIDATE_AND_SUBMIT_BUTTON: Locator;

  constructor(page1: Page) {
    this.page1 = page1;
    this.NEAREST_HUB = page1.locator("[formcontrolname='nearestHub']");
    this.NEAREST_HUB_VALUE = page1.getByRole('option', { name: surveyData.nearestHublocation });
    this.NEAREST_NODE = page1.locator("[formcontrolname='nearestNode']");
    this.NEAREST_NODE_VALUE = page1.getByRole('option', { name: surveyData.nearestNodevalue });
    this.PENETRATION_RATE = page1.getByLabel('Penetration Rate for Nearest');
    this.NEW_SURVEY_BUTTON = page1.locator('#newSurveyButton');
    this.SURVEY_NAME = page1.locator("[formcontrolname='name']");
    this.ARCHITECTURE_TYPE = page1.locator('#architectureType');
    this.SERVICE_PLANT = page1.locator('#servicePlant');
    this.PROJECTED_PASSING = page1.locator('#projectedPassing');
    this.DESCRIPTION = page1.locator('#description');
    this.SAVE_BUTTON = page1.locator('#saveButton');
    this.COST_DRIVERS = page1.locator(
      "//span[@class='align-text-bottom' and text()= '" + surveyData.costDriverName + "']"
    );
    this.COST_DRIVER_COUNT = page1.locator("//div[@class='readonly-quantity']");
    this.COST_DRIVER_REMOVE_BUTTON = page1.locator('#remove-costDriver-button');
    this.NEW_QUANTITY_OLT = page1.locator('#newQuantity');
    this.COUNT_CANCEL_SAVE_BUTTON = page1.locator('#cancelSaveButtonId');
    this.COUNT_SAVE_CHANGE_BUTTON = page1.locator('#saveChangeButtonId');
    this.ADD_FOOTAGE_OPTION = page1.locator('#addFootage');
    this.FOOTAGE_TYPE = page1.locator('#footageType');
    this.FOOTAGE_TYPE_OPTIONS = page1.getByLabel('Footage Type');
    this.ACTIVITY_TYPE = page1.getByRole('button', {
      name: surveyData.activityType,
      exact: true,
    });
    this.CONDUICT_VACANT = page1.getByRole('button', { name: surveyData.conduictVacant });
    this.RIGHT_OF_WAY = page1.getByRole('button', { name: surveyData.rightofWay });
    this.FOOTAGE_LENGTH = page1.locator('#quantity');
    this.FOOTAGE_DEPTH = page1.locator('lib-depth #depth');
    this.FIBER_COUNT = page1.locator('lib-fiber-count #fiberCount');
    this.COAX_SIZE = page1.locator('#coaxSize');
    this.ADD_FOOTAGE_SAVE_BUTTON = page1.locator('#addFootageButton');
    this.DOCUMENT_ATTACH_FILE = page1.locator("//button[contains(text(), 'Attach File')]");
    this.DOCUMENT_UPLOAD_FROM_COMPUTER = page1.locator(
      "//button[contains(text(), 'Upload from computer')]"
    );
    this.ATTACHMENT_TYPE = page1.locator("//select[@formcontrolname='type']");
    this.UPLOAD_BUTTON = page1.getByRole('button', { name: 'Upload' });
    this.SURVEY_OVERVIEW_BUTTON = page1.locator('#surveyOverviewButton');
    this.CANCEL_THIS_JOB = page1.getByRole('button', { name: ' Cancel This Job ' });
    this.CANCELLATION_REASON = page1.getByRole('combobox');
    this.GO_BACK_CANCEL_POPUP = page1.getByRole('button', { name: 'Go Back' });
    this.CANCEL_THIS_JOB_OPTION = page1.getByRole('button', { name: 'Cancel this Job' });
    this.VALIDATE_AND_SUBMIT_BUTTON = page1.getByRole('button', {
      name: 'Validate & Submit Survey',
    });
  }
}
