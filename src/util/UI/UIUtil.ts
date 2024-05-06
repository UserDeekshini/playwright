import { Frame, Locator, Page, expect, test } from '@playwright/test';
import Logger from '../../helper/Log';
import ActionPage from './ActionUtil';

export default class UIUtil {
  action: ActionPage;
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
    this.action = new ActionPage(page);
  }
  /**
   * ================ ****** UI UTIL ******====================
   */

  /**
   * Handles different types of alerts based on the specified options
   * @param {Page} page - The page object
   * @param {string} options - The type of alert action to perform ('accept', 'cancel', 'sendkeys')
   * @param {Locator} element - The locator for the element that triggers the alert
   * @param {string} sendkeys - The keys to send in case of a 'sendkeys' action
   * @returns {Promise<string>} The message displayed in the alert
   * @developedBy  Anitha Ramachandran
   */

  async alertHandling(
    page: Page,
    options: string = 'accept|cancel|sendkeys',
    element: Locator,
    sendkeys?: string
  ): Promise<string> {
    let alertMessage;
    // Validation to ensure required parameters are provided
    if (options && element) {
      try {
        await test.step(`Handling ${options} type alert on the element`, async () => {
          Logger.info(`Handling ${options} type alert on the element`);
          if (options === 'accept') {
            // Handle accepting the alert
            await page.on('dialog', async (alert) => {
              alertMessage = alert.message();
              Logger.info(`Alert message: ${alertMessage} for ${options}`);
              await alert.accept();
            });
            await this.action.click('click', element);
          }

          if (options === 'cancel') {
            // Handle dismissing the alert
            await page.on('dialog', async (alert) => {
              alertMessage = alert.message();
              Logger.info(`Alert message: ${alertMessage} for ${options}`);
              await alert.dismiss();
            });
            await this.action.click('click', element);
          }

          if (options === 'sendkeys') {
            // Handle sending keys to the alert
            await page.on('dialog', async (alert) => {
              alertMessage = alert.message();
              Logger.info(`Alert message: ${alertMessage} for ${options}`);
              await alert.accept(sendkeys);
            });
            await this.action.click('click', element);
          }
        });
        return alertMessage || '';
      } catch (error) {
        Logger.error('An error occurred while handling the alert:' + error);
        return 'error';
      }
    } else {
      throw new Error('Options for alert and locator are required');
    }
  }

  /**
   * Retrieves a value from the element based on the specified attribute or property.
   * @param {Locator} element - The element from which to retrieve the value
   * @param {string} attributeValue - The attribute or property to retrieve ('attribute', 'allInnerText', 'innerText', 'inputValue')
   * @param {any} attributeOptions - The options for the attribute or property retrieval
   * @returns {Promise<any>} The retrieved value from the element
   * @developedBy   Anitha Ramachandran
   */

  async retrieveValue(
    element: Locator,
    attributeValue: string = 'attribute|innerText|inputValue',
    attributeOptions?: any
  ): Promise<string | null> {
    let retrieveValue: string | null;
    try {
      Logger.info(`Retrieves a value from the element based on the ${attributeValue}`);
      if (attributeValue === 'attribute') {
        retrieveValue = await element.getAttribute(attributeOptions);
      } else if (attributeValue === 'innerText') {
        retrieveValue = await element.innerText(attributeOptions);
      } else if (attributeValue === 'inputValue') {
        retrieveValue = await element.inputValue();
      } else {
        retrieveValue = await element.textContent();
      }
      Logger.info(`Retrieved value from element: ${retrieveValue}`);
      return retrieveValue;
    } catch (error) {
      Logger.error(`Error while retrieving value from element: ${error}`);
      throw new Error(`Error while retrieving value from element: ${error}`);
    }
  }

  /**
   * Asynchronously retrieves values based on options for the specified await element.
   * @param {Locator} element The element to retrieve values from
   * @param {string} attributeValue The attribute value to determine the type of values to retrieve. Possible values: "allTextContents" or "allInnerTexts"
   * @param {any} attributeOptions Additional options for retrieving values (optional)
   * @returns {Promise<Array<string>>} A promise that resolves to an array of strings containing the retrieved values
   * @throws {Error} If an error occurs while retrieving the value from the element
   * @developedBy   Anitha Ramachandran
   */

  async retrieveValueAll(element: Locator, attributeValue: string): Promise<Array<string>> {
    let retrieveValue;
    try {
      Logger.info(`Retrieves all value from the element based on the ${attributeValue}`);
      if (attributeValue === 'allTextContents') {
        retrieveValue = await await element.allTextContents();
      } else {
        retrieveValue = await await element.allInnerTexts();
      }
      return retrieveValue;
    } catch (error) {
      Logger.error(`Error while retrieving value from element: ${error}`);
      throw new Error(`Error while retrieving value from element: ${error}`);
    }
  }

  /**
   * Performs a frame action on the page based on the specified type of frame.
   * @param {Page} page The page to perform the frame action on
   * @param {string} typeOfFrame The type of frame action to perform: "mainFrame" or "frame[url orname]" (default is "name")
   * @returns{Promise<Frame |null >} A promise that resolves to the frame object based on the specified type of frame action
   * @developedBy   Anitha Ramachandran
   */

  async frameActionPageAction(
    page: Page,
    typeOfFrame = 'mainFrame |url|name',
    frameOptions: any
  ): Promise<Frame | null> {
    let returnValueofFrame;
    if (typeOfFrame) {
      try {
        Logger.info(`Performs a frame action on the page based on the : ${typeOfFrame}`);
        if (typeOfFrame === 'mainFrame') {
          returnValueofFrame = await page.mainFrame();
        } else if (typeOfFrame === 'url') {
          returnValueofFrame = await page.frame({ url: frameOptions });
        } else {
          returnValueofFrame = await page.frame(frameOptions);
        }
        return returnValueofFrame;
      } catch (error) {
        Logger.error(`Error in Frame Action: ${error}`);
        throw new Error(`Error in FrameAction: ${error}`);
      }
    } else {
      throw new Error('typeOfFrame parameter is required.');
    }
  }

  /**
   * Waits for a specific condition on the page based on the provided options.
   * @param {Page} page The page to wait on.
   * @param {string} typeofWait The type of wait condition (selector, load, timeout, event, function, navigation, request, response).
   * @param {any} waitoptions Additional options for the wait condition.
   * @throws {Error} - Throws an error if there is a problem with the wait condition.
   * @developedBy   Anitha Ramachandran
   */

  public async waitForElement(page: Page, typeofWait: string, waitoptions: any) {
    try {
      Logger.info(`Waiting for  ${typeofWait} with waitoption has ${waitoptions}`);
      if (typeofWait === 'selector') {
        await page.waitForSelector(waitoptions);
      } else if (typeofWait === 'timeout') {
        await page.waitForTimeout(waitoptions);
      } else if (typeofWait === 'event') {
        await page.waitForEvent(waitoptions);
      } else if (typeofWait === 'function') {
        await page.waitForFunction(waitoptions);
      } else if (typeofWait === 'waitforurl') {
        await page.waitForURL(waitoptions);
      } else if (typeofWait === 'request') {
        await page.waitForRequest(waitoptions);
      } else if (typeofWait === 'response') {
        await page.waitForResponse(waitoptions);
      } else {
        await page.waitForLoadState(waitoptions);
      }
    } catch (error) {
      Logger.error(`Error while waiting for condition: ${error}`);
    }
  }

  /**
   * Waits for the element to meet the specified condition.
   * @param {Page} page The page on which to wait for the await element.
   * @param {string} action The action to perform.
   * @param {string} locatorMethodName The method name for locating the element ('locator', 'role', 'text', 'placeHolder', 'altText', 'label', 'title', 'testId').
   * @param {any} selector The selector or identifier to locate the await element.
   * @param {string} condition The condition to wait for ('attached', 'detached', 'visible', 'hidden').
   * @param {number} timeout Timeout value in milliseconds (default is 30000ms).
   * @param {any} filteringType The type of filtering to apply (optional).
   * @param {any} filterOptions The filtering options to apply (optional).
   * @param {any} subLocator The sub-locator to use (optional).
   * @throws {Error} Throws an error if there is an issue while waiting for the element condition.
   * @developedBy   Anitha Ramachandran
   */

  public async waitFor(
    element: Locator,
    condition: 'attached' | 'detached' | 'visible' | 'hidden',
    timeoutOption = 30000,
    filteringType?: any,
    selectorOptions?: any,
    filterOptions?: any,
    subLocator?: any
  ) {
    try {
      await await element.waitFor({
        state: condition,
        timeout: timeoutOption,
      });
      Logger.info(`Waiting for element condition: ${condition}`);
    } catch (error) {
      Logger.error(`Error while waiting for element condition: ${error}`);
      throw new Error(`Error while waiting for element condition: ${error}`);
    }
  }

  /**
   * Bring the browser page to the front.
   * @param {Page} page The browser page to bring to the front.
   * @developedBy   Anitha Ramachandran
   */

  public async bringPageToFront(page: Page) {
    try {
      await page.bringToFront();
      Logger.info('Page brought to the front successfully');
    } catch (error) {
      Logger.error(`Error while bringing the page to the front: ${error}`);
      throw new Error(`Error while bringing the page to the front: ${error}`);
    }
  }

  /**
   * Downloads a file from the specified download link and saves it to the specified file path.
   * @param {Page} page The page on which download operation.
   * @param {string} downloadLink The download link for the file
   * @param {string} filePathName The file path to save the downloaded file
   * @developedBy   Anitha Ramachandran
   */
  async downloadingUploadingOptions(page: Page, downloadLink: string, filePathName: string) {
    try {
      Logger.info(`Downloading file from link: ${downloadLink}`);
      const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.click(downloadLink),
      ]);

      await download.saveAs(filePathName);
      Logger.info(`File downloaded successfully to: ${filePathName}`);
    } catch (error) {
      Logger.error(`Error in downloadingUploadingOptions: ${error}`);
      throw new Error(`Error in downloadingUploadingOptions: ${error}`);
    }
  }

  /**
   * Validates the title of the page against the expected title.
   *
   * @param {Page} page The page to validate the title on
   * @param {string} expectedTitle The expected title to compare with the page title
   * @returns {Promise<string>} A promise that resolves to the title of the page
   * @developedBy   Anitha Ramachandran
   */
  async pageTitle(page: Page, expectedTitle: string) {
    try {
      await page.waitForLoadState('domcontentloaded');
      const title = await page.title();
      expect(title).toEqual(expectedTitle);
      Logger.info(`Page title: ${title}`);
      return title;
    } catch (error) {
      Logger.error(`Error in page Title Validation: ${error}`);
      throw new Error(`Error in page Title Validation: ${error}`);
    }
  }

  /**
   * Uploads a file using different methods (filechooser, dialog, or setInputFile).
   * @param {Page} page - The  page object.
   * @param {string} [type="filechooser|dialog|setInputFile"] - The type of file upload method.
   * @param {Locator} element - The element selector where the file upload action will be triggered.
   * @param {string} filePath - The path of the file to upload.
   * @param {any} [fileOptions] - Additional options for file upload.
   * @developedBy   Anitha Ramachandran
   */

  async fileUpload(
    page: Page,
    type: string = 'filechooser|dialog|setInputFile',
    element: Locator,
    filePath: string,
    fileOptions?: any
  ) {
    try {
      Logger.info(
        `Uploading the File in the path ${filePath} for the multiple has ${type} in the ${element}`
      );
      if (type === 'filechooser') {
        const fileChooserPromise = page.waitForEvent('filechooser');
        await element.click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(filePath, fileOptions);
      } else if (type === 'dialog') {
        page.on('filechooser', async (fileChooser) => {
          await fileChooser.setFiles(filePath, fileOptions);
        });
        await await element.click();
      } else {
        await await element.setInputFiles(filePath, fileOptions);
      }
    } catch (error) {
      Logger.error(`Error uploading file: ${error}`);
    }
  }

  /**
   * Counts the number of elements matching the provided locator.
   * @param {Locator} element - The element locator used to find elements on the page.
   * @returns {Promise<number>} The number of elements matching the locator.
   * @throws {Error} If an error occurs while counting the elements.
   * @developedBy   Anitha  Ramachandran
   */

  public async count(element: Locator): Promise<number> {
    try {
      Logger.info(`The ${element} has ${await element.count()} count`);
      return await element.count();
    } catch (error) {
      Logger.error(`Error while counting elements: ${error}`);
      throw new Error(`Error while counting elements: ${error}`);
    }
  }

  /**
   * Performs the specified validation on the element using the provided validation type.
   * @param {Locator} element - The element locator to perform validation on.
   * @param {string} validationType - The type of validation to perform (visible, hidden, enabled, disabled, checked, editable, select).
   * @param {any} [validationOptions] - Additional options for the validation.
   * @returns {Promise<boolean>} The result of the validation.
   * @throws {Error} If an error occurs during the validation process.
   * @developedBy   Anitha Ramachandran
   */

  public async validation(
    element: Locator,
    validationType: string = 'visible|hidden|enabled|disabled|checked|editable',
    validationOptions?: any
  ) {
    try {
      let validation;
      Logger.info(`Validation for the element ${element} of the type ` + validationType);
      switch (validationType) {
        case 'hidden':
          validation = await element.isHidden(validationOptions);
          break;
        case 'enabled':
          validation = await element.isEnabled(validationOptions);
          break;
        case 'disabled':
          validation = await element.isDisabled(validationOptions);
          break;
        case 'checked':
          validation = await element.isChecked(validationOptions);
          break;
        case 'editable':
          validation = await element.isEditable(validationOptions);
          break;
        default:
          validation = await element.isVisible(validationOptions);
          break;
      }
      Logger.info(`Validation done with status as ${validation}`);
      return validation;
    } catch (error) {
      Logger.error(`Error during element validation: ${error}`);
      throw new Error(`Error during element validation: ${error}`);
    }
  }

  /**
   * Selects text within the specified element.
   * @param {Locator} element - The element locator where text selection will be performed.
   * @param {any} [selectTextOptions] [Optional] - Additional options for text selection.
   * @developedBy   Anitha Ramachandran
   */

  public async selectText(element: Locator, selectTextOptions?: any) {
    try {
      Logger.info(`Selecting text within the ${element}`);
      await element.selectText(selectTextOptions);
    } catch (error) {
      Logger.error(`Error while selecting text: ${error}`);
      throw new Error(`Error while selecting text: ${error}`);
    }
  }

  /**
   * Takes a screenshot of the page or a specific element based on the specified type.
   * @param {Page} page - The Playwright page object for taking the screenshot.
   * @param {string} type - The type of screenshot to take ('fullpage', 'buffer', 'clip').
   * @param {Locator} element - The element locator to take a screenshot of (if type is 'clip').
   * @param {any} screenshotOptions - The options for taking the screenshot.
   * @returns {Promise<Buffer | string>} The screenshot data as a Buffer or Base64 string.
   * @developedBy   Anitha Ramachandran
   */

  public async screenshot(
    page: Page,
    type: string = 'fullpage|buffer|clip',
    element: Locator,
    screenshotOptions?: any
  ) {
    try {
      let screenshot;
      Logger.info(`Taking ${type} screenshot`);

      if (type === 'fullpage') {
        screenshot = await page.screenshot({ path: screenshotOptions, fullPage: true });
      } else if (type === 'buffer') {
        screenshot = await page.screenshot(screenshotOptions);
        console.log(screenshot.toString('base64')); // Convert Buffer to Base64 string for buffer type
      } else {
        screenshot = await element.screenshot(screenshotOptions);
      }
      return screenshot;
    } catch (error) {
      Logger.error(`Error taking screenshot: ${error}`);
      throw new Error(`Error taking screenshot: ${error}`);
    }
  }
}
