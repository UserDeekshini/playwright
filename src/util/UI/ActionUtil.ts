import { Keyboard, Locator, Page, expect, test } from '@playwright/test';
import Logger from '../../helper/Log';
import { DateTime } from 'luxon';
import Log from '../../helper/Log';
import { fork } from 'child_process';

export default class LocatorUtil {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * ================ ****** ACTION UTIL ******====================
   */

  /**
   * Clicks on an  element.
   * @param {Page} page - The page object where the element resides.
   * @param {string} action - The action to perform (Default: "click").
   * @param {any} clickOptions - Options for the click action.
   * @throws {Error} - Throws an error if there is a problem with the await element.
   * @developedBy Anitha Ramachandran
   */

  public async click(action = 'Click', element: Locator, clickOptions?: any) {
    try {
      await test.step(`${action} on an  element`, async () => {
        if (action === 'dblClick') {
          await element.dblclick(clickOptions);
          Logger.info(`Element: ${element} double clicked successfully.`);
        } else {
          await element.click(clickOptions);

          Logger.info(`Element: ${element} clicked successfully.`);
        }
      });
    } catch (error) {
      Logger.error('Error clicking on element: ' + error);
      throw new Error('Error clicking on event: ' + error);
    }
  }

  /**
   * Click on the page event
   * @param {Page} page - The page object
   * @param {string} selector - The selector to click
   * @param {any} options - Additional options for the click action
   * @param {any} typeOfSelector - The type of selector (Default: undefined)
   * @throws {Error} - Throws an error if there is a problem with  the await element.
   * @developedBy  Anitha Ramachandran
   */

  public async pageClick(page: Page, selector: string, options?: any, typeOfSelector?: any) {
    try {
      await test.step(`PageClick on an  element ${selector}`, async () => {
        if (typeOfSelector === 'doubleClick') {
          if (!options) {
            // Perform a double click on the specified selector
            await page.dblclick(selector);
            Logger.info(`Page event double click successful for the selector:  ${selector}`);
          } else {
            // Perform a double click on the specified selector with additional options
            await page.dblclick(selector, options);
            Logger.info(`Page event double click successful for the selector:  ${selector}`);
          }
        } else {
          if (!options) {
            // Perform a single click on the specified selector
            await page.click(selector);
            Logger.info(`Page event click successful for the selector:  ${selector}`);
          } else {
            // Perform a single click on the specified selector with additional options
            await page.click(selector, options);
            Logger.info(`Page event click successful for the selector:  ${selector}`);
          }
        }
        Logger.info(`Page event click successful for the selector:  ${selector}`);
      });
    } catch (error) {
      Logger.error('Error clicking on page event:' + error);
      throw new Error('Error clicking on page event : ' + error);
    }
  }

  /**
   * Performs various mouse actions on a page using Puppeteer.
   *
   * @param {Page} page - The  page object.
   * @param {number} xvalue - The x-coordinate value.
   * @param {number} yvalue - The y-coordinate value.
   * @param {string} [source=""] - The source element (optional).
   * @param {string} [target=""] - The target element (optional).
   * @param {string} [selector=""] - The selector of an element (optional).
   * @param {any} [typeoptions] - Options for a specific action type (optional).
   * @param {any} [options] - Additional options for mouse actions (optional).
   * @throws {Error} - Throws an error if there is a problem with  the await element.
   * @developedBy   Anitha Ramachandran
   */

  public async mouseActions(
    page: Page,
    typeoptions: string = 'wheel|doubleClick,up,down,move,dragandDrop,hover',
    xvalue: number,
    yvalue: number,
    source: string = '',
    target: string = '',
    selector: string = '',
    options?: any
  ) {
    try {
      await test.step(`Mouse Action  on an  element with the type ${typeoptions}`, async () => {
        Logger.info(`Mouse Action  on an  element with the type ${typeoptions}`);
        switch (typeoptions) {
          case 'wheel':
            if (!options) {
              await page.mouse.wheel(xvalue, yvalue);
            }
            break;

          case 'doubleClick':
            if (!options) {
              await page.mouse.dblclick(xvalue, yvalue);
            } else {
              await page.mouse.dblclick(xvalue, yvalue, options);
            }
            break;

          case 'up':
            if (!options) {
              await page.mouse.up();
            } else {
              await page.mouse.up(options);
            }
            break;

          case 'down':
            if (!options) {
              await page.mouse.down();
            } else {
              await page.mouse.down(options);
            }
            break;

          case 'move':
            if (!options) {
              await page.mouse.move(xvalue, yvalue);
            } else {
              await page.mouse.move(xvalue, yvalue, options);
            }
            break;

          case 'dragandDrop':
            if (!options) {
              await page.dragAndDrop(source, target);
            } else {
              await page.dragAndDrop(source, target, options);
            }
            break;

          case 'hover':
            if (!options) {
              await page.hover(selector);
            } else {
              await page.hover(selector, options);
            }
            break;

          default:
            if (!options) {
              await page.mouse.click(xvalue, yvalue);
            } else {
              await page.mouse.click(xvalue, yvalue, options);
            }
            break;
        }
      });
    } catch (error) {
      Logger.error('Error occurred: ' + error);
      throw new Error('An error occurred : ' + error);
    }
  }

  /**
   * Performs keyboard actions based on the specified type and action.
   * @param {Page} page - The  page object.
   * @param {string} action The type of action to perform press|text|type|up (default is "type")
   * @param {string} value The value to use for the action (optional)
   * @throws {Error} - Throws an error if there's an issue during the check operation.
   * @developedBy   Anitha Ramachandran
   */

  public async keyboardAction(page: Page, action: string = 'press|text|type|up', value: string) {
    try {
      await test.step(`Keyboard Action on an  element with the action ${action} `, async () => {
        Logger.info(`The ${action} keyboard Action  Started`);
        switch (action) {
          case 'press':
            await page.keyboard.press(value);
            break;
          case 'text':
            await page.keyboard.insertText(value);
            break;
          case 'up':
            if (value) {
              await page.keyboard.up(value);
            }
            break;
          default:
            await page.keyboard.type(value);
        }
        Logger.info(`The ${action} keyboard Action Performed Successfully`);
      });
    } catch (error) {
      Logger.error(`Error in Keyboard Action:  ${action} ${error}`);
      throw new Error(`Error in Keyboard Action: ${action}  ${error}`);
    }
  }

  /**
   * Perform check actions on the specified element, such as setting checked status and additional checks.
   * @param {Locator} element - The element locator on which check actions will be performed.
   * @param {boolean} checked - The checked status to set for the element.
   * @param {any} [setCheckedOption] - Additional options for setting the checked status.
   * @param {any} [checkOptions] - Additional options for the check action.
   * @returns {Promise<boolean>} A boolean indicating whether the element is checked after the actions.
   * @developedBy   Anitha Ramachandran
   */

  public async checkActions(
    element: Locator,
    checked: boolean,
    setCheckedOption?: any,
    checkOptions?: any
  ): Promise<boolean> {
    try {
      await test.step(`Check actions on the specified element  with set checked has ${checked}`, async () => {
        Logger.info(`Check actions on the specified element  with set checked has ${checked}`);
        await element.setChecked(checked, setCheckedOption);
        await element.check(checkOptions);
      });
      Logger.info(`Element checked: ${element}`);
      return await element.isChecked(checkOptions);
    } catch (error) {
      Logger.error('Error checking element: ' + error);
      return false; // Return false in case of an error
    }
  }

  /**
   * Perform uncheck actions on the specified element, such as setting unchecked status and additional checks.
   * @param {Locator} element - The element locator on which uncheck actions will be performed.
   * @param {boolean} checked - The unchecked status to set for the element.
   * @param {any} [setCheckedOption] - Additional options for setting the unchecked status.
   * @param {any} [checkOptions] - Additional options for the uncheck action.
   * @returns {Promise<boolean>} A boolean indicating whether the element is unchecked after the actions.
   * @developedBy   Anitha Ramachandran
   */

  public async unCheckActions(
    element: Locator,
    checked: boolean,
    setCheckedOption?: any,
    checkOptions?: any
  ): Promise<boolean> {
    try {
      await test.step(`Uncheck actions on the specified element  with set checked has ${checked}`, async () => {
        Logger.info(`Uncheck actions on the specified element  with set checked has ${checked}`);
        await element.setChecked(checked, setCheckedOption);
        await element.uncheck(checkOptions);
      });
      Logger.info(`Element unchecked: ${element}`);
      return await element.isChecked();
    } catch (error) {
      Logger.error('Error unchecking element: ' + error);
      return true; // Return true in case of an error
    }
  }

  /**
   * Navigate to the specified URL.
   * @param {Page} page - The page object
   * @param {string} URL - The URL to navigate to.
   * @param {string} description - The description of the navigation.
   * @throws {Error} - Throws an error if there is a problem with  the await element.
   * @developedBy   Anitha Ramachandran
   */

  public async launch(page: Page, URL: string, expectedTitle: string, description: string) {
    try {
      await test.step(`Navigating to ${description}`, async () => {
        Logger.info(`Navigating to ${description}`);
        await page.goto(URL, { waitUntil: 'load' });
        await expect(page).toHaveTitle(expectedTitle);
        Logger.info(
          `Navigated to ${description} successfully with expected url ${URL} and expected title has ${expectedTitle}`
        );
      });
    } catch (error) {
      Logger.error('An error occurred during navigation: ' + error);
      throw new Error('An error occurred during navigation: ' + error);
    }
  }

  /**
   * Close the web application.
   * @param {Page} page - The page object.
   * @throws {Error} - Throws an error if there is a problem closing the web application.
   * @developedBy   Anitha Ramachandran
   */

  public async closeWebApplication(page: Page) {
    try {
      await test.step(`Close the web application.`, async () => {
        Logger.info(`Close the web application.`);
        await page.close();
        Logger.info('Web application closed successfully.');
      });
    } catch (error) {
      Logger.error('An error occurred while closing the web application: ' + error);
      throw new Error('An error occurred while closing the web application: ' + error);
    }
  }

  /**
   * Perform an action (fill/press/seq) on the specified  element.
   * @param {string} action - The action to perform (fill/press/seq). Default: "fill".
   * @param {Locator} element - The element representing the input field.
   * @param {string} value - The value to enter or press.
   * @param {any} valueOptions - Options for the value action.
   * @throws {Error} - Throws an error if there is a problem with the await element.
   * @developedBy Anitha Ramachandran
   */

  public async sendKeys(
    action: string = 'fill',
    element: Locator,
    value: string,
    valueOptions?: any
  ) {
    try {
      await test.step(`Perform an action ${action} on the specified  element`, async () => {
        Logger.info(`Perform an action ${action} on the specified  element.`);
        if (action === 'press') {
          await element.press(value, valueOptions);
          await element.press(value, valueOptions);
        } else if (action === 'seq') {
          await element.pressSequentially(value, valueOptions);
        } else {
          await element.fill(value, valueOptions);
        }
        Logger.info(`Element: ${element}, Value: ${value} entered successfully.`);
      });
    } catch (error) {
      Logger.error('Error entering the element: ' + error);
      throw new Error('Error entering element: ' + error);
    }
  }

  /**
   * Perform an action on a dropdown await element.
   * @param {Locator} element - The element representing the dropdown.
   * @param {string} value - The value to select in the dropdown.
   * @param {any} valueOptions - Options for the value action.
   * @returns {Promise<Array<string>>} - An array of selected values
   * @throws {Error} - Throws an error if there is a problem with the await element.
   * @developedBy Anitha Ramachandran
   */

  public async dropDown(
    element: Locator,
    value: string,
    valueOptions?: any
  ): Promise<Array<string>> {
    try {
      let selectValue: Array<string> = [];
      await test.step(`Perform an action dropdown with ${value} on the specified  element`, async () => {
        Logger.info(`Element: ${element}, Value: ${value} entered successfully.`);
        selectValue = await element.selectOption(value, valueOptions);
      });
      return await selectValue;
    } catch (error) {
      Logger.error('Error selecting the element: ' + error);
      throw new Error('Error selecting element: ' + error);
    }
  }

  /**
   * Perform a navigation action on the page.
   * @param {Page} page - The page object.
   * @param {string} action - The navigation action to perform (goBack/goForward/pageRefresh) Default =>Page Refresh.
   * @throws {Error} - Throws an error if there is a problem with the navigation action.
   * @developedBy   Anitha Ramachandran
   */

  public async navigate(page: Page, action: string) {
    try {
      await test.step(`Navigating to ${action}`, async () => {
        Logger.info(`Navigating to ${action}`);
        switch (action) {
          case 'goBack':
            await page.goBack();
            Logger.info('Went back to the previous page.');
            break;
          case 'goForward':
            await page.goForward();
            Logger.info('Went forward to the next page.');
            break;
          default:
            await page.reload();
            Logger.info('Page refreshed successfully.');
            break;
        }
      });
    } catch (error) {
      Logger.error('An error occurred during navigation: ' + error);
      throw new Error('An error occurred during navigation: ' + error);
    }
  }

  /**
   * Perform a pause and reload action on the page.
   *
   * @param {Page} page - The page object.
   * @param {number} milliseconds - The duration to pause in milliseconds before reloading.
   * @throws {Error} - Throws an error if there is a problem with the pause and reload action.
   * @developedBy   Anitha Ramachandran
   */

  public async reloadPause(page: Page, milliseconds: number = 1000) {
    try {
      test.step(`Page reloaded after a pause of ${milliseconds} milliseconds.`, async () => {
        Logger.info(`Page reloaded after a pause of ${milliseconds} milliseconds.`);
        await page.waitForTimeout(milliseconds);
        await page.reload();
        Logger.info(`Page reloaded after a pause of ${milliseconds} milliseconds.`);
      });
    } catch (error) {
      Logger.error('An error occurred during the pause and reload action: ' + error);
      throw new Error('An error occurred during the pause and reload action: ' + error);
    }
  }

  /**
   * Get the current URL and compare it with an expected URL.
   * @param {Page} page - The page object.
   * @param {string} URL - The URL to compare with.
   * @param {string} description - The description of the comparison.
   * @param {string} expectedURL - The expected URL to compare with.
   * @throws {Error} - Throws an error if the current URL doesn't match the expected URL.
   * @developedBy  Anitha Ramachandran
   */

  public async getUrl(page: Page, expectedURL: string) {
    try {
      test.step(`Comparing the current URL with the expected URL`, async () => {
        Logger.info(`Comparing the current URL with the expected URL`);
        const currentURL = await page.url();
        expect(currentURL).toBe(expectedURL);
        Logger.info(`URL: ${currentURL} matched with the expected URL: ${expectedURL}`);
      });
    } catch (error) {
      Logger.error('An error occurred during URL comparison: ' + error);
      throw new Error('An error occurred during URL comparison: ' + error);
    }
  }

  /**
   * Switches to a new window based on the provided parameters.
   *
   * @param {Page} page The page to perform the action on
   * @param {any} clickOptions The click options to use (optional).
   * @throws {Error} - Throws an error
   * @returns {Promise<Page>} A Promise resolving to the new page opened.
   * @developedBy  Anitha Ramachandran
   */

  public async switchToNewPage(
    page: Page,
    element: Locator,
    description: string,
    clickOptions?: any
  ): Promise<Page> {
    let newPage: Page | undefined;
    try {
      await test.step(`Opening ${description} Page`, async () => {
        Logger.info(`Opening ${description} Page`);
        const [event, _] = await Promise.all([
          this.page.context().waitForEvent('page'),
         this.click('click', element),
        ]);
        newPage = event as Page;
      });

      if (newPage) {
        Logger.info(`Switched to ${description}  page successfully`);
        return newPage;
      } else {
        throw new Error('Failed to open new page');
      }
    } catch (error) {
      Logger.error(`Error in switching to new page: ${error}`);
      throw new Error('Error in switching to new page:' + error);
    }
  }

  /**
   * Scrolls the element into view if it's not already in view.
   * @param {Locator} element - The element to scroll into view.
   * @throws {Error} - Throws an error if there is an issue while scrolling the element into view.
   * @developedBy Anitha Ramachandran
   */

  public async scrollIntoView(element: Locator) {
    try {
      test.step(`Scrolling into view for the element`, async () => {
        Logger.info(`Scrolling into view for the element`);
        await element.scrollIntoViewIfNeeded();
      });
      Logger.info(`Scrolled into view for the element: ${element}`);
    } catch (error) {
      Logger.error(`Error while scrolling into view for the element: ${error}`);
      throw new Error(`Error while scrolling into view for the element: ${error}`);
    }
  }

  /**
   * Hover over the element on the page.
   * @param {Locator} element - The element to hover over.
   * @param {any} hoveroption - Options for the hover action (optional).
   * @throws {Error} - Throws an error if there is an issue while hovering over the await element.
   * @developedBy Anitha Ramachandran
   */

  public async hover(element: Locator, hoveroption?: any) {
    try {
      test.step(`Hovering over the element`, async () => {
        Logger.info(`Hovering over the element`); // Hover over the element
        await element.hover(hoveroption);
      });
      Logger.info(`Hovering over the element: ${element}`);
    } catch (error) {
      Logger.error(`Error while hovering over the element: ${error}`);
      throw new Error(`Error while hovering over the element: ${error}`);
    }
  }

  /**
   * Perform a drag action on the specified element, potentially hovering over another element.
   * @param {Locator} element - The element locator to perform the drag action on.
   * @param {any} [hoveroption] - Additional options for the drag operation, like hovering over another element.
   * @returns {Promise<void>} A promise that resolves once the drag action is completed.
   * @throws {Error} If an error occurs during the drag operation.
   * @developedBy Anitha Ramachandran
   */

  public async dragTo(element: Locator, hoveroption?: any) {
    try {
      await test.step(`Dragging the element`, async () => {
        Logger.info(`Dragging the element`);
        await element.dragTo(hoveroption);
      });
      Logger.info(`Hovering over the element: ${element}`);
    } catch (error) {
      Logger.error(`Error while hovering over the element: ${error}`);
      throw new Error(`Error while hovering over the element: ${error}`);
    }
  }

  /**
   * Tap on the element on the page.
   * @param {Locator} element - The element to tap over.
   * @param {any} tapOption Options for the tap action (optional).
   * @throws {Error} Throws an error if there is an issue while tapping on the await element.
   * @developedBy  Anitha Ramachandran
   */

  public async tap(element: Locator, tapOption?: any) {
    try {
      await test.step(`Tapping the element`, async () => {
        Logger.info(`Tapping the element`);
        await element.tap(tapOption);
        Logger.info(`Tapping on the element: ${element}`);
      });
    } catch (error) {
      Logger.error(`Error while tapping on the element: ${error}`);
      throw new Error(`Error while tapping on the element: ${error}`);
    }
  }

  /**
   * Clears or focuses on an input field based on the action provided.
   * @param {Page} page - The page object
   * @param {string} action - The action to perform ('clear' or 'focus')
   * @param {Locator} element - The element to clear or Focus.
   * @param {any} clearFocusOption - The options for clearing or focusing
   * @developedBy   Anitha Ramachandran
   */

  public async clearFocus(action: string = 'focus', element: Locator, clearFocusOption?: any) {
    try {
      await test.step(`${action} the element`, async () => {
        Logger.info(`${action} the element`);
        if (action === 'clear') {
          // Clear the input field
          await element.clear(clearFocusOption);
          Logger.info(`Cleared the input field on the element: ${element}`);
        } else {
          // Focus on the input element
          await element.focus(clearFocusOption);
          Logger.info(`Focused on the element: ${element}`);
        }
      });
    } catch (error) {
      Logger.error(`Error while clearing the input field or focusing on the element: ${error}`);
      throw new Error(`Error while clearing the input field or focusing on the element: ${error}`);
    }
  }

  /**
   * Selects a date on a calendar.
   * @param {Page} page - The  page object.
   * @param {string} locator - The locator to find the calendar element.
   * @param {string} calendarStartdatelocator - The locator of the calendar start date element.
   * @param {number} day - The day to be selected.
   * @param {string} monthyear - The month and year to be selected.
   * @param {string} monthYearLocator - The locator of the month and year element.
   * @param {string} prevButtonLocator - The locator of the previous button element.
   * @param {string} nextBtnLocator - The locator of the next button element.
   * @developedBy   Anitha Ramachandran
   */
  async calendarSelect(
    page: Page,
    locator: string,
    calendarStartdatelocator: string,
    day: number,
    monthyear: string,
    monthYearLocator: string,
    prevButtonLocator: string,
    nextBtnLocator: string
  ) {
    try {
      await test.step(`Selects a date on a calendar : ${day}- ${monthyear}`, async () => {
        Logger.info(`Selects a date on a calendar :${day}- ${monthyear}`);
        await page.locator(calendarStartdatelocator).click();
        await this.selectDate(
          day,
          monthyear,
          page,
          monthYearLocator,
          prevButtonLocator,
          nextBtnLocator
        );
        await page.waitForTimeout(5000);
        await page.reload();
        Logger.info(`Selected the date on a calendar  ${day}- ${monthyear}`);
      });
    } catch (error) {
      Logger.error(`Error in calendarSelect method: ${error}`);
      throw new Error('An error occurred in calendarSelect method');
    }
  }

  /**
   * Selects a specific date on the calendar.
   * @param {number} date - The date to be selected.
   * @param {string} dateToSelect - The formatted date to be selected for the format MMMM yyyy
   * @param {Page} page - The  page object.
   * @param {string} monthYearLocator - The locator of the month and year element.
   * @param {string} prevButtonLocator - The locator of the previous button element.
   * @param {string} nextBtnLocator - The locator of the next button element.
   * @developedBy   Anitha Ramachandran
   */

  async selectDate(
    date: number,
    dateToSelect: string,
    page: Page,
    monthYearLocator: string,
    prevButtonLocator: string,
    nextBtnLocator: string
  ) {
    try {
      const monthYear = await page.locator(monthYearLocator);
      const prevButton = await page.locator(prevButtonLocator);
      const nextButton = await page.locator(nextBtnLocator);

      const formattedMonth = DateTime.fromFormat(dateToSelect, 'MMMM yyyy');
      Logger.info(`The formatted Month ${formattedMonth}`);
      while ((await monthYear.textContent()) !== dateToSelect) {
        if (formattedMonth < DateTime.fromJSDate(new Date())) {
          await prevButton.click();
          Logger.info(`${formattedMonth} < ${DateTime.fromJSDate(new Date())}`);
        } else {
          await nextButton.click();
          Logger.info(`${formattedMonth} > ${DateTime.fromJSDate(new Date())}`);
        }
      }

      await page.locator(`//td[@class="day"] [text()="${date}"]`).click();
    } catch (error) {
      Logger.error(`Error in selectDate method: ${error}`);
      throw new Error('An error occurred in selectDate method');
    }
  }

  /**
   * Fetches data from a paginated web table.
   * @param {Page} page - The  page object.
   * @param {string} tableLocator - Locator for the web table.
   * @param {string} pagination - Flag indicating if pagination is enabled.
   * @developedBy   Anitha Ramachandran
   */

  async paginationWebTable(page: Page, tableLocator: Locator, pagination: string = 'yes|no') {
    try {
      await test.step(`Fetches data from a paginated web table.`, async () => {
        Logger.info(`Fetches data from a paginated web table.`);
        const table = tableLocator;
        const rows = await table.locator('tbody tr').count();
        const columns = await table.locator('thead tr th').count();

        if (pagination === 'yes') {
          const pages = page.locator('#pagination li a');
          const totalPages = await pages.count();
          Logger.info('Total number of Pages in the Pagination Web table: ' + totalPages);

          for (let p = 0; p < totalPages; p++) {
            if (p > 0) {
              await pages.nth(p).click();
            }

            for (let i = 0; i < rows; i++) {
              for (let j = 0; j < columns; j++) {
                const cell = table.locator('td').nth(i).nth(j);
                const cellText = await cell.textContent();
                Logger.info(`The value in the cell text ${cellText}`);
              }
            }
          }
        }
      });
    } catch (error) {
      Logger.error(`Error in paginationWebTable method:' ${error}`);
      throw new Error('An error occurred in paginationWebTable method');
    }
  }
}
