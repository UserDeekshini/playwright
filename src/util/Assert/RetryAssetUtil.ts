import { Locator, Page, expect } from '@playwright/test';
import Logger from '../../helper/Log';

export default class RetryAssertUtil {
  /**
   * ================ ****** RETRY ASSERT UTIL ******====================
   */

  /**
   * Check if the element identified by the `locator` is attached to the DOM.
   * @param {Locator} locator - The Playwright locator for the element to check.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the element is not attached (default is soft Assertion).
   * @param {any} [options] - Additional options to pass to the expectation.
   * @developedBy Anitha Ramachandran
   */

  async toBeAttached(locator: Locator, assertNotType?: boolean, options?: any) {
    try {
      Logger.info(`Asserting toBeAttached`);
      if (assertNotType === false) {
        Logger.info(
          `Asserting toBeAttached with status  ${await expect(locator).toBeAttached(options)}`
        );
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting not toBeAttached with status  ${await expect(locator).not.toBeAttached(options)}`
        );
      } else {
        Logger.info(
          `Asserting soft toBeAttached with status  ${await expect.soft(locator).toBeAttached(options)}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toBeAttached method:  ${error}`);
      throw new Error('An error occurred in toBeAttached method');
    }
  }

  /**
   * Check if the checkbox element identified by the `locator` is checked.
   * @param {Locator} locator - The Playwright locator for the checkbox element to check.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the checkbox is not checked (default is undefined).
   * @param {any} [options] - Additional options to pass to the expectation.
   * @developedBy Anitha Ramachandran
   */

  async toBeChecked(locator: Locator, assertNotType?: boolean, options?: any) {
    try {
      if (assertNotType === false) {
        Logger.info(
          `Asserting toBeChecked with status  ${await expect(locator).toBeChecked(options)}`
        );
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting not toBeChecked with status ${await expect(locator).not.toBeChecked(options)}`
        );
      } else {
        Logger.info(
          `Asserting soft toBeChecked with status ${await expect.soft(locator).toBeChecked(options)}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toBeChecked method:  ${error}`);
      throw new Error('An error occurred in toBeChecked method');
    }
  }

  /**
   * Checks if the element located by the given locator is disabled.
   * @param {Locator} locator - The locator to find the element.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the element is not disabled.
   * @param {any} [options] - Additional options for the assertion.
   * @developedBy Anitha Ramachandran
   */

  async toBeDisabled(locator: Locator, assertNotType?: boolean, options?: any) {
    try {
      if (assertNotType === false) {
        Logger.info(
          `Asserting toBeDisabled with status  ${await expect(locator).toBeDisabled(options)}`
        );
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting not toBeDisabled with status  ${await expect(locator).not.toBeDisabled(options)}`
        );
      } else {
        Logger.info(
          `Asserting soft toBeDisabled with status ${await expect.soft(locator).toBeDisabled(options)}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toBeDisabled method:  ${error}`);
      throw new Error('An error occurred in toBeDisabled method');
    }
  }

  /**
   * Checks if the element located by the given locator is editable.
   * @param {Locator} locator - The locator to find the element.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the element is not editable.
   * @param {any} [options] - Additional options for the assertion.
   * @developedBy Anitha Ramachandran
   */

  async toBeEditable(locator: Locator, assertNotType?: boolean, options?: any) {
    try {
      if (assertNotType === false) {
        Logger.info(
          `Asserting toBeEditable with status  ${await expect(locator).toBeEditable(options)}`
        );
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting not toBeEditable with status  ${await expect(locator).not.toBeEditable(options)}`
        );
      } else {
        Logger.info(
          `Asserting soft toBeEditable with status ${await expect.soft(locator).toBeEditable(options)}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toBeEditable method:  ${error}`);
      throw new Error('An error occurred in toBeEditable method');
    }
  }

  /**
   * Checks if the element located by the given locator is empty.
   * @param {Locator} locator - The locator to find the element.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the element is not empty.
   * @param {any} [options] - Additional options for the assertion.
   * @developedBy Anitha Ramachandran
   */

  async toBeEmpty(locator: Locator, assertNotType?: boolean, options?: any) {
    try {
      if (assertNotType === false) {
        Logger.info(`Asserting toBeEmpty with status  ${await expect(locator).toBeEmpty(options)}`);
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting not toBeEmpty with status  ${await expect(locator).not.toBeEmpty(options)}`
        );
      } else {
        Logger.info(
          `Asserting soft toBeEmpty with status ${await expect.soft(locator).toBeEmpty(options)}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toBeEmpty method:  ${error}`);
      throw new Error('An error occurred in toBeEmpty method');
    }
  }

  /**
   * Checks if the element located by the given locator is enabled.
   * @param {Locator} locator - The locator to find the element.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the element is not enabled.
   * @param {any} [options] - Additional options for the assertion.
   * @developedBy Anitha Ramachandran
   */

  async toBeEnabled(locator: Locator, assertNotType?: boolean, options?: any) {
    try {
      if (assertNotType === false) {
        Logger.info(
          `Asserting toBeEnabled with status  ${await expect(locator).toBeEnabled(options)}`
        );
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting not toBeEnabled with status  ${await expect(locator).not.toBeEnabled(options)}`
        );
      } else {
        Logger.info(
          `Asserting soft toBeEnabled with status ${await expect.soft(locator).toBeEnabled(options)}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toBeEnabled method:  ${error}`);
      throw new Error('An error occurred in toBeEnabled method');
    }
  }

  /**
   * Checks if the element located by the given locator is focused.
   * @param {Locator} locator - The locator to find the element.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the element is not focused.
   * @param {any} [options] - Additional options for the assertion.
   * @developedBy Anitha Ramachandran
   */

  async toBeFocused(locator: Locator, assertNotType?: boolean, options?: any) {
    try {
      if (assertNotType === false) {
        Logger.info(
          `Asserting toBeFocused with status  ${await expect(locator).toBeFocused(options)}`
        );
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting not toBeFocused with status  ${await expect(locator).not.toBeFocused(options)}`
        );
      } else {
        Logger.info(
          `Asserting soft toBeFocused with status ${await expect.soft(locator).toBeFocused(options)}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toBeFocused method:  ${error}`);
      throw new Error('An error occurred in toBeFocused method');
    }
  }

  /**
   * Checks if the element located by the given locator is hidden.
   * @param {Locator} locator - The locator to find the element.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the element is not hidden.
   * @param {any} [options] - Additional options for the assertion.
   * @developedBy Anitha Ramachandran
   */

  async toBeHidden(locator: Locator, assertNotType?: boolean, options?: any) {
    try {
      if (assertNotType === false) {
        Logger.info(
          `Asserting toBeHidden with status  ${await expect(locator).toBeHidden(options)}`
        );
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting not toBeHidden with status  ${await expect(locator).not.toBeHidden(options)}`
        );
      } else {
        Logger.info(
          `Asserting soft toBeHidden with status ${await expect.soft(locator).toBeHidden(options)}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toBeHidden method:  ${error}`);
      throw new Error('An error occurred in toBeHidden method');
    }
  }

  /**
   * Checks if the element located by the given locator is in the viewport.
   * @param {Locator} locator - The locator to find the element.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the element is not in the viewport.
   * @param {any} [options] - Additional options for the assertion.
   * @developedBy Anitha Ramachandran
   */

  async toBeInViewport(locator: Locator, assertNotType?: boolean, options?: any) {
    try {
      if (assertNotType === false) {
        Logger.info(
          `Asserting toBeInViewport with status  ${await expect(locator).toBeInViewport(options)}`
        );
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting not toBeInViewport with status  ${await expect(locator).not.toBeInViewport(options)}`
        );
      } else {
        Logger.info(
          `Asserting soft toBeInViewport with status ${await expect.soft(locator).toBeInViewport(options)}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toBeInViewport method:  ${error}`);
      throw new Error('An error occurred in toBeInViewport method');
    }
  }

  /**
   * Checks if the element located by the given locator is visible.
   * @param {Locator} locator - The locator to find the element.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the element is not visible.
   * @param {any} [options] - Additional options for the assertion.
   * @developedBy Anitha Ramachandran
   */

  async toBeVisible(locator: Locator, assertNotType?: boolean, options?: any) {
    try {
      if (assertNotType === false) {
        Logger.info(
          `Asserting toBeVisible with status  ${await expect(locator).toBeVisible(options)}`
        );
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting not toBeVisible with status  ${await expect(locator).not.toBeVisible(options)}`
        );
      } else {
        Logger.info(
          `Asserting soft toBeVisible with status ${await expect.soft(locator).toBeVisible(options)}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toBeVisible method:  ${error}`);
      throw new Error('An error in toBeVisible  method');
    }
  }

  /**
   * Checks if the element located by the given locator contains the expected text.
   * @param {Locator} locator - The locator to find the element.
   * @param {string} expectedValue - The expected text value to check for.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the element does not contain the text.
   * @param {any} [options] - Additional options for the assertion.
   * @developedBy Anitha Ramachandran
   */

  async toContainText(
    locator: Locator,
    expectedValue: string,
    assertNotType?: boolean,
    options?: any
  ) {
    try {
      if (assertNotType === false) {
        Logger.info(
          `Asserting toContainText with status  ${await expect(locator).toContainText(expectedValue, options)}`
        );
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting not toContainText with status  ${await expect(locator).not.toContainText(expectedValue, options)}`
        );
      } else {
        Logger.info(
          `Asserting soft toContainText with status ${await expect.soft(locator).toContainText(expectedValue, options)}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toContainText method:  ${error}`);
      throw new Error('An error occurred in toContainText method');
    }
  }

  /**
   * Checks if the element located by the given locator has the expected attribute with the specified value.
   * @param {Locator} locator - The locator to find the element.
   * @param {string} attributeName - The name of the attribute.
   * @param {string} expectedValue - The expected value of the attribute.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the element does not have the attribute with the expected value.
   * @param {any} [options] - Additional options for the assertion.
   * @developedBy Anitha Ramachandran
   */

  async toHaveAttribute(
    locator: Locator,
    attributeName: string,
    expectedValue: string,
    assertNotType?: boolean,
    options?: any
  ) {
    try {
      if (assertNotType === false) {
        Logger.info(
          `Asserting toHaveAttribute with status  ${await expect(locator).toHaveAttribute(attributeName, expectedValue, options)}`
        );
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting not toHaveAttribute with status  ${await expect(locator).not.toHaveAttribute(attributeName, expectedValue, options)}`
        );
      } else {
        Logger.info(
          `Asserting soft toHaveAttribute with status ${await expect.soft(locator).toHaveAttribute(attributeName, expectedValue, options)}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toHaveAttribute method:  ${error}`);
      throw new Error('An error occurred in toHaveAttribute method');
    }
  }

  /**
   * Checks if the element located by the given locator has the specified class.
   * @param {Locator} locator - The locator to find the element.
   * @param {string} className - The class name to check for.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the element does not have the specified class.
   * @param {any} [options] - Additional options for the assertion.
   * @developedBy Anitha Ramachandran
   */

  async toHaveClass(locator: Locator, className: string, assertNotType?: boolean, options?: any) {
    try {
      if (assertNotType === false) {
        Logger.info(
          `Asserting toHaveClass with status  ${await expect(locator).toHaveClass(className, options)}`
        );
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting not toHaveClass with status  ${await expect(locator).not.toHaveClass(className, options)}`
        );
      } else {
        Logger.info(
          `Asserting soft toHaveClass with status ${await expect.soft(locator).toHaveClass(className, options)}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toHaveClass method:  ${error}`);
      throw new Error('An error occurred in toHaveClass method');
    }
  }

  /**
   * Checks if the element located by the given locator has the specified CSS property with the expected value.
   * @param {Locator} locator - The locator to find the element.
   * @param {string} cssProperty - The CSS property to check for.
   * @param {string} expectedValue - The expected value of the CSS property.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the element does not have the CSS property with the expected value.
   * @param {any} [options] - Additional options for the assertion.
   * @developedBy Anitha Ramachandran
   */

  async toHaveCSS(
    locator: Locator,
    cssProperty: string,
    expectedValue: string,
    assertNotType?: boolean,
    options?: any
  ) {
    try {
      if (assertNotType === false) {
        Logger.info(
          `Asserting toHaveCSS with status  ${await expect(locator).toHaveCSS(cssProperty, expectedValue, options)}`
        );
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting not toHaveCSS with status  ${await expect(locator).not.toHaveCSS(cssProperty, expectedValue, options)}`
        );
      } else {
        Logger.info(
          `Asserting soft toHaveCSS with status ${await expect.soft(locator).toHaveCSS(cssProperty, expectedValue, options)}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toHaveCSS method:  ${error}`);
      throw new Error('An error occurred in toHaveCSS method');
    }
  }

  /**
   * Checks if the element located by the given locator has the specified id.
   * @param {Locator} locator - The locator to find the element.
   * @param {string} id - The id to check for.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the element does not have the specified id.
   * @param {any} [options] - Additional options for the assertion.
   * @developedBy Anitha Ramachandran
   */

  async toHaveId(locator: Locator, id: string, assertNotType?: boolean, options?: any) {
    try {
      if (assertNotType === false) {
        Logger.info(`Asserting toHaveId with status  ${await expect(locator).toHaveId(options)}`);
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting not toHaveId with status  ${await expect(locator).not.toHaveId(options)}`
        );
      } else {
        Logger.info(
          `Asserting soft toHaveId with status ${await expect.soft(locator).toHaveId(options)}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toHaveId method:  ${error}`);
      throw new Error('An error occurred in toHaveId method');
    }
  }

  /**
   * Checks if the element located by the given locator has the expected text content.
   * @param {Locator} locator - The locator to find the element.
   * @param {string} expectedValue - The expected text content to check for.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the element does not have the expected text content.
   * @param {any} [options] - Additional options for the assertion.
   * @developedBy Anitha Ramachandran
   */

  async toHaveText(
    locator: Locator,
    expectedValue: string,
    assertNotType?: boolean,
    options?: any
  ) {
    try {
      if (assertNotType === false) {
        Logger.info(
          `Asserting toHaveText with status  ${await expect(locator).toHaveText(expectedValue, options)}`
        );
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting not toHaveText with status  ${await expect(locator).not.toHaveText(expectedValue, options)}`
        );
      } else {
        Logger.info(
          `Asserting soft toHaveText with status ${await expect.soft(locator).toHaveText(expectedValue, options)}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toHaveText method:  ${error}`);
      throw new Error('An error occurred in toHaveText method');
    }
  }

  /**
   * Checks if the page has the expected title.
   * @param {Page} page - The page to check the title of.
   * @param {string} expectedValue - The expected title value to check for.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the page does not have the expected title.
   * @param {any} [options] - Additional options for the assertion.
   * @developedBy Anitha Ramachandran
   */

  async toHaveTitle(page: Page, expectedValue: string, assertNotType?: boolean, options?: any) {
    try {
      if (assertNotType === false) {
        Logger.info(
          `Asserting toHaveTitle with status  ${await expect(page).toHaveTitle(expectedValue, options)}`
        );
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting not toHaveTitle with status  ${await expect(page).not.toHaveTitle(expectedValue, options)}`
        );
      } else {
        Logger.info(
          `Asserting soft toHaveTitle with status ${await expect.soft(page).toHaveTitle(expectedValue, options)}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toHaveTitle method:  ${error}`);
      throw new Error('An error occurred in toHaveTitle method');
    }
  }

  /**
   * Checks if the element located by the given locator has the specified JavaScript property with the expected value.
   * @param {Locator} locator - The locator to find the element.
   * @param {string} propertyname - The name of the JavaScript property.
   * @param {string} propertyValue - The expected value of the JavaScript property.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the element does not have the JavaScript property with the expected value.
   * @param {any} [options] - Additional options for the assertion.
   * @developedBy Anitha Ramachandran
   */

  async toHaveJSProperty(
    locator: Locator,
    propertyname: string,
    propertyValue: string,
    assertNotType?: boolean,
    options?: any
  ) {
    try {
      if (assertNotType === false) {
        Logger.info(
          `Asserting toHaveJSProperty with status  ${await expect(locator).toHaveJSProperty(propertyname, propertyValue, options)}`
        );
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting not toHaveJSProperty with status  ${await expect(locator).not.toHaveJSProperty(propertyname, propertyValue, options)}`
        );
      } else {
        Logger.info(
          `Asserting soft toHaveJSProperty with status ${await expect.soft(locator).toHaveJSProperty(propertyname, propertyValue, options)}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toHaveJSProperty method:  ${error}`);
      throw new Error('An error occurred in toHaveJSProperty method');
    }
  }

  /**
   * Checks if the page has the expected URL.
   * @param {Page} page - The page to check the URL of.
   * @param {string} expectedValue - The expected URL value to check for.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the page does not have the expected URL.
   * @param {any} [options] - Additional options for the assertion.
   * @developedBy Anitha Ramachandran
   */

  async toHaveURL(page: Page, expectedValue: string, assertNotType?: boolean, options?: any) {
    try {
      if (assertNotType === false) {
        Logger.info(
          `Asserting toHaveURL with status  ${await expect(page).toHaveURL(expectedValue, options)}`
        );
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting not toHaveURL with status  ${await expect(page).not.toHaveURL(expectedValue, options)}`
        );
      } else {
        Logger.info(
          `Asserting soft toHaveURL with status ${await expect.soft(page).toHaveURL(expectedValue, options)}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toHaveURL method:  ${error}`);
      throw new Error('An error occurred in toHaveURL method');
    }
  }

  /**
   * Checks if the screenshot of the page matches the expected snapshot.
   * @param {Page} page - The page to take a screenshot of.
   * @param {string} expectedValue - The expected snapshot value to match.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the screenshot does not match the expected snapshot.
   * @param {any} [options] - Additional options for the assertion.
   * @developedBy Anitha Ramachandran
   */

  async toMatchSnapshot(page: Page, expectedValue: string, assertNotType?: boolean, options?: any) {
    try {
      if (assertNotType === false) {
        Logger.info(
          `Asserting toMatchSnapshot with status  ${await expect(page.screenshot()).toMatchSnapshot(expectedValue, options)}`
        );
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting not toMatchSnapshot with status  ${await expect(page.screenshot()).not.toMatchSnapshot(expectedValue, options)}`
        );
      } else {
        Logger.info(
          `Asserting soft toMatchSnapshot with status ${await expect.soft(page.screenshot()).toMatchSnapshot(expectedValue, options)}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toMatchSnapshot method:  ${error}`);
      throw new Error('An error occurred in toMatchSnapshot method');
    }
  }

  /**
   * Checks if the element located by the given locator has the expected value.
   * @param {Locator} locator - The locator to find the element.
   * @param {string} expectedValue - The expected value to check for.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the element does not have the expected value.
   * @param {any} [options] - Additional options for the assertion.
   * @developedBy Anitha Ramachandran
   */

  async toHaveValue(
    locator: Locator,
    expectedValue: string,
    assertNotType?: boolean,
    options?: any
  ) {
    try {
      if (assertNotType === false) {
        Logger.info(
          `Asserting toHaveValue with status  ${await expect(locator).toHaveValue(expectedValue, options)}`
        );
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting not toHaveValue with status  ${await expect(locator).not.toHaveValue(expectedValue, options)}`
        );
      } else {
        Logger.info(
          `Asserting soft toHaveValue with status ${await expect.soft(locator).toHaveValue(expectedValue, options)}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toHaveValue method:  ${error}`);
      throw new Error('An error occurred in toHaveValue method');
    }
  }

  /**
   * Checks if the element located by the given locator has the expected array of values.
   * @param {Locator} locator - The locator to find the element.
   * @param {Array<string>} expectedValue - The expected array of values to check for.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the element does not have the expected array of values.
   * @param {any} [options] - Additional options for the assertion.
   * @developedBy Anitha Ramachandran
   */

  async toHaveValues(
    locator: Locator,
    expectedValue: Array<string>,
    assertNotType?: boolean,
    options?: any
  ) {
    try {
      if (assertNotType === false) {
        Logger.info(
          `Asserting toHaveValues with status  ${await expect(locator).toHaveValues(expectedValue, options)}`
        );
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting not toHaveValues with status  ${await expect(locator).not.toHaveValues(expectedValue, options)}`
        );
      } else {
        Logger.info(
          `Asserting soft toHaveValues with status ${await expect.soft(locator).toHaveValues(expectedValue, options)}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toHaveValues method:  ${error}`);
      throw new Error('An error occurred in toHaveValues method');
    }
  }
}
