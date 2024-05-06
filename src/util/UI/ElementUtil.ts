import { FrameLocator, Locator, Page } from '@playwright/test';
import Logger from '../../helper/Log';

export default class ElementUtil {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * ================ ****** ELEMENT UTIL ******====================
   */

  /**
   * Method to provide locator options based on the selector and type
   * @param selector - The selector string
   * @param type - The type of operation (filter|combine|or|concat|nth|first|last|default)
   * @param options - Additional options for the locator
   * @param filterOptions - Filter options
   * @param subLocator - Sub-locator
   * @param count - Count value
   * @returns Promise<Locator>
   * @throws Error
   *@developedBy   Anitha Ramachandran
   */
  public async locatorOptions(
    page: Page,
    selector: string,
    type: string = 'filter|combine|or|concat|nth|first|last|default',
    options?: any,
    filterOptions?: any,
    subLocator?: any,
    count: number = 0
  ): Promise<Locator> {
    let assignLocator;
    // validation to ensure required parameters are provided
    if (selector && type) {
      try {
        switch (type) {
          case 'filter': // Conditional Locators
            assignLocator = filterOptions
              ? await page.locator(selector).filter(filterOptions)
              : await page.locator(selector).filter(options);
            break;

          case 'combine': // Combine two locators
            assignLocator =
              subLocator && options
                ? await page.locator(selector, options).and(subLocator)
                : await page.locator(selector).and(subLocator);
            break;

          case 'or': // Check one of the two alternatives
            assignLocator =
              subLocator && options
                ? await page.locator(selector, options).or(subLocator)
                : await page.locator(selector).or(subLocator);
            break;

          case 'concat': // Concatenate the locator element
            assignLocator =
              subLocator && options
                ? await page.locator(selector, options).locator(subLocator)
                : await page.locator(selector).locator(subLocator);
            break;

          case 'nth': // Nth element
            assignLocator = options
              ? page.locator(selector, options).nth(count)
              : page.locator(selector).nth(count);
            break;

          case 'first': // First element
            assignLocator = options
              ? await page.locator(selector, options).first()
              : await page.locator(selector).first();
            break;

          case 'last': // Last element
            assignLocator = options
              ? await page.locator(selector, options).last()
              : await page.locator(selector).last();
            break;

          default: // default locator with option else without options
            assignLocator = options
              ? await page.locator(selector, options)
              : await page.locator(selector);
            break;
        }
      } catch (error) {
        Logger.error('Error in locatorOptions method: ' + error);
      }
      Logger.info(`LOCATOR  ${assignLocator}`);
      return assignLocator || page.locator('html'); // Returning a default value if assignLocator is undefined
    } else {
      throw new Error('Selector and type are required');
    }
  }

  /**
   * Retrieves a locator based on role, options, and type.
   * @param {Page} page - The page object
   * @param {any} roles - The roles to search for
   * @param {any} options - The options for the roles
   * @param {string} type - The type of operation (filter|combine|or|concat|nth|first|last|default)
   * @param {any} filterOptions - The filter options
   * @param {any} subLocator - The sub-locator
   * @param {number} count - The count for nth element
   * @returns {Promise<Locator>} - The located element
   * @throws Error
   *@developedBy   Anitha Ramachandran
   */
  public async getByRoleOption(
    page: Page,
    roles: any,
    options: any,
    type: string = 'filter|combine|or|concat|nth|first|last|default',
    filterOptions?: any,
    subLocator?: any,
    count: number = 0
  ): Promise<Locator> {
    let assignLocator;
    console.log('ROLE', roles, 'OPTIONS', options);
    // Validation to ensure required parameters are provided
    if (roles && type) {
      try {
        switch (type) {
          case 'filter': // Conditional Locators
            assignLocator = filterOptions
              ? await page.getByRole(roles).filter(filterOptions)
              : await page.getByRole(roles, options).filter(filterOptions);
            break;
          case 'combine': // Combine two locators
            assignLocator =
              subLocator && options
                ? await page.getByRole(roles, options).and(subLocator)
                : await page.getByRole(roles).and(subLocator);
            break;
          case 'or': // Check one of the two alternatives
            assignLocator =
              subLocator && options
                ? await page.getByRole(roles, options).or(subLocator)
                : await page.getByRole(roles).or(subLocator);
            break;
          case 'concat': // Concatenate the getByRole element
            assignLocator =
              subLocator && options
                ? await page.getByRole(roles, options).getByRole(subLocator)
                : await page.getByRole(roles).getByRole(subLocator);
            break;
          case 'nth': // Nth element
            assignLocator = options
              ? page.getByRole(roles, options).nth(count)
              : page.getByRole(roles).nth(count);
            break;
          case 'first': // First element
            assignLocator = options
              ? await page.getByRole(roles, options).first()
              : await page.getByRole(roles).first();
            break;
          case 'last': // Last element
            assignLocator = options
              ? await page.getByRole(roles, options).last()
              : await page.getByRole(roles).last();
            break;
          default: // Default locator with option else without options
            assignLocator = options
              ? await page.getByRole(roles, options)
              : await page.getByRole(roles);
            break;
        }
      } catch (error) {
        Logger.error(`Error in  getRoleOptions method: ${error}`);
      }
      Logger.info(`LOCATOR  ${assignLocator}`);
      return assignLocator || page.locator('html'); // Returning a default value if assignLocator is undefined
    } else {
      throw new Error('Role and type are required');
    }
  }
  /**
   * Get locator based on label option asynchronously
   * @param {Page} page - The page object
   * @param {string} text - The text to search for
   * @param {string} type - The type of operation to perform (filter|combine|or|concat|nth|first|last|default)
   * @param {any} options - Additional options for the operation
   * @param {any} filterOptions - Filter options
   * @param {any} subLocator - Sub-locator
   * @param {number} count - The count for nth operation
   * @throws {Error} Throws an error if selector and type are not provided
   * @returns {Promise<Locator>} The located element
   * @developedBy   Anitha Ramachandran
   */

  public async getByLabelOption(
    page: Page,
    text: string,
    type: string = 'filter|combine|or|concat|nth|first|last|default',
    options?: any,
    filterOptions?: any,
    subLocator?: any,
    count: number = 0
  ): Promise<Locator> {
    let assignLocator;
    //validation to ensure required parameters are provided
    if (text && type) {
      try {
        switch (type) {
          case 'filter': // Conditional Locators
            assignLocator = filterOptions
              ? await page.getByLabel(text).filter(filterOptions)
              : await page.getByLabel(text, options).filter(filterOptions);
            break;

          case 'combine': // Combine two locators
            assignLocator =
              subLocator && options
                ? await page.getByLabel(text, options).and(subLocator)
                : await page.getByLabel(text).and(subLocator);
            break;

          case 'or': // Check one of the two alternatives
            assignLocator =
              subLocator && options
                ? await page.getByLabel(text, options).or(subLocator)
                : await page.getByLabel(text).or(subLocator);
            break;
          case 'concat': // Concatenate the getByLabel element
            assignLocator =
              subLocator && options
                ? await page.getByLabel(text, options).getByLabel(subLocator)
                : await page.getByLabel(text).getByLabel(subLocator);
            break;

          case 'nth': // Nth element
            assignLocator = options
              ? page.getByLabel(text, options).nth(count)
              : page.getByLabel(text).nth(count);
            break;
          case 'first': // First element
            assignLocator = options
              ? await page.getByLabel(text, options).first()
              : await page.getByLabel(text).first();
            break;

          case 'last': // Last element
            assignLocator = options
              ? await page.getByLabel(text, options).last()
              : await page.getByLabel(text).last();
            break;

          default: // default locator with option else without options
            assignLocator = options
              ? await page.getByLabel(text, options)
              : await page.getByLabel(text);
            break;
        }
      } catch (error) {
        Logger.error('Error in getByLabelOptions method: ' + error);
      }
      Logger.info(`LOCATOR  ${assignLocator}`);
      return assignLocator || page.locator('html'); // Returning a default value if assignLocator is undefined
    } else {
      throw new Error('Selector and type are required');
    }
  }

  /**
   * Retrieves a locator based on alternative text options.
   * @param {Page} page - The page object.
   * @param {string} text - The alternative text.
   * @param {string} type - The type of locator (filter, combine, or, concat, nth, first, last, default).
   * @param {any} options - The options for the locator.
   * @param {any} filterOptions - The filter options.
   * @param {any} subLocator - The sub-locator.
   * @param {number} count - The count for the nth locator.
   * @throws {Error} Throws an error if selector and type are not provided.
   * @returns {Promise<Locator>} A Promise that resolves to the generated locator.
   * @developedBy   Anitha Ramachandran
   */

  public async getByAltTextOption(
    page: Page,
    text: string,
    type: string = 'filter|combine|or|concat|nth|first|last|default',
    options?: any,
    filterOptions?: any,
    subLocator?: any,
    count: number = 0
  ): Promise<Locator> {
    let assignLocator;
    //validation to ensure required parameters are provided
    if (text && type) {
      try {
        switch (type) {
          case 'filter': // Conditional Locators
            assignLocator = filterOptions
              ? await page.getByAltText(text).filter(filterOptions)
              : await page.getByAltText(text, options).filter(filterOptions);
            break;

          case 'combine': // Combine two locators
            assignLocator =
              subLocator && options
                ? await page.getByAltText(text, options).and(subLocator)
                : await page.getByAltText(text).and(subLocator);
            break;

          case 'or': // Check one of the two alternatives
            assignLocator =
              subLocator && options
                ? await page.getByAltText(text, options).or(subLocator)
                : await page.getByAltText(text).or(subLocator);
            break;

          case 'concat': // Concatenate the getByAltText element
            assignLocator =
              subLocator && options
                ? await page.getByAltText(text, options).getByAltText(subLocator)
                : await page.getByAltText(text).getByAltText(subLocator);
            break;

          case 'nth': // Nth element
            assignLocator = options
              ? page.getByAltText(text, options).nth(count)
              : page.getByAltText(text).nth(count);
            break;

          case 'first': // First element
            assignLocator = options
              ? await page.getByAltText(text, options).first()
              : await page.getByAltText(text).first();
            break;

          case 'last': // Last element
            assignLocator = options
              ? await page.getByAltText(text, options).last()
              : await page.getByAltText(text).last();
            break;

          default: // default locator with option else without options
            assignLocator = options
              ? await page.getByAltText(text, options)
              : await page.getByAltText(text);
            break;
        }
      } catch (error) {
        console.error('Error in getByAltTextOptions method: ', error);
      }
      Logger.info(`LOCATOR  ${assignLocator}`);
      return assignLocator || page.locator('html'); // Returning a default value if assignLocator is undefined
    } else {
      throw new Error('Selector and type are required');
    }
  }

  /**
   * Retrieves a locator based on alternative text options.
   * @param {Page} page - The page object.
   * @param {string} text - The alternative text.
   * @param {string} type - The type of locator (filter, combine, or, concat, nth, first, last, default).
   * @param {any} options - The options for the locator.
   * @param {any} filterOptions - The filter options.
   * @param {any} subLocator - The sub-locator.
   * @param {number} count - The count for the nth locator.
   * @throws {Error} Throws an error if selector and type are not provided.
   * @returns {Promise<Locator>} A Promise that resolves to the generated locator.
   * @developedBy   Anitha Ramachandran
   */

  public async getByTextOption(
    page: Page,
    text: string,
    type: string = 'filter|combine|or|concat|nth|first|last|default',
    options?: any,
    filterOptions?: any,
    subLocator?: any,
    count: number = 0
  ): Promise<Locator> {
    let assignLocator;
    //validation to ensure required parameters are provided
    if (text && type) {
      try {
        switch (type) {
          case 'filter': // Conditional Locators
            assignLocator = filterOptions
              ? await page.getByText(text).filter(filterOptions)
              : await page.getByText(text, options).filter(filterOptions);
            break;

          case 'combine': // Combine two locators
            assignLocator =
              subLocator && options
                ? await page.getByText(text, options).and(subLocator)
                : await page.getByText(text).and(subLocator);
            break;

          case 'or': // Check one of the two alternatives
            assignLocator =
              subLocator && options
                ? await page.getByText(text, options).or(subLocator)
                : await page.getByText(text).or(subLocator);
            break;

          case 'concat': // Concatenate the getByText element
            assignLocator =
              subLocator && options
                ? await page.getByText(text, options).getByText(subLocator)
                : await page.getByText(text).getByText(subLocator);
            break;

          case 'nth': // Nth element
            assignLocator = options
              ? page.getByText(text, options).nth(count)
              : page.getByText(text).nth(count);
            break;

          case 'first': // First element
            assignLocator = options
              ? await page.getByText(text, options).first()
              : await page.getByText(text).first();
            break;

          case 'last': // Last element
            assignLocator = options
              ? await page.getByText(text, options).last()
              : await page.getByText(text).last();
            break;

          default: // default locator with option else without options
            assignLocator = options
              ? await page.getByText(text, options)
              : await page.getByText(text);
            break;
        }
      } catch (error) {
        Logger.error('Error in getByTextOptions method: ' + error);
      }
      Logger.info(`LOCATOR  ${assignLocator}`);
      return assignLocator || page.locator('html'); // Returning a default value if assignLocator is undefined
    } else {
      throw new Error('Selector and type are required');
    }
  }

  /**
   * Retrieves a locator based on placeholder options.
   * @param {Page} page - The page object.
   * @param {string} text - The placeholder text.
   * @param {string} type - The type of locator (filter, combine, all, or, concat, nth, first, last, frame, default).
   * @param {any} options - The options for the locator.
   * @param {any} filterOptions - The filter options.
   * @param {any} subLocator - The sub-locator.
   * @param {number} count - The count for the nth locator.
   * @throws {Error} Throws an error if selector and type are not provided.
   * @returns {Promise<Locator>} A Promise that resolves to the generated locator.
   * @developedBy   Anitha Ramachandran
   */
  public async getByPlaceholderOption(
    page: Page,
    text: string,
    type: string = 'filter|combine|or|concat|nth|first|last|default',
    options?: any,
    filterOptions?: any,
    subLocator?: any,
    count: number = 0
  ): Promise<Locator> {
    let assignLocator;
    //validation to ensure required parameters are provided
    if (text && type) {
      try {
        switch (type) {
          case 'filter': // Conditional Locators
            assignLocator = filterOptions
              ? await page.getByPlaceholder(text).filter(filterOptions)
              : await page.getByPlaceholder(text, options).filter(filterOptions);
            break;

          case 'combine': // Combine two locators
            assignLocator =
              subLocator && options
                ? await page.getByPlaceholder(text, options).and(subLocator)
                : await page.getByPlaceholder(text).and(subLocator);
            break;

          case 'or': // Check one of the two alternatives
            assignLocator =
              subLocator && options
                ? await page.getByPlaceholder(text, options).or(subLocator)
                : await page.getByPlaceholder(text).or(subLocator);
            break;

          case 'concat': // Concatenate the getByPlaceholder element
            assignLocator =
              subLocator && options
                ? await page.getByPlaceholder(text, options).getByPlaceholder(subLocator)
                : await page.getByPlaceholder(text).getByPlaceholder(subLocator);
            break;

          case 'nth': // Nth element
            assignLocator = options
              ? page.getByPlaceholder(text, options).nth(count)
              : page.getByPlaceholder(text).nth(count);
            break;

          case 'first': // First element
            assignLocator = options
              ? await page.getByPlaceholder(text, options).first()
              : await page.getByPlaceholder(text).first();
            break;

          case 'last': // Last element
            assignLocator = options
              ? await page.getByPlaceholder(text, options).last()
              : await page.getByPlaceholder(text).last();
            break;

          default: // default locator with option else without options
            assignLocator = options
              ? await page.getByPlaceholder(text, options)
              : await page.getByPlaceholder(text);
            break;
        }
      } catch (error) {
        Logger.error('Error in getByPlaceholderOptions method: ' + error);
      }
      Logger.info(`LOCATOR  ${assignLocator}`);
      return assignLocator || page.locator('html'); // Returning a default value if assignLocator is undefined
    } else {
      throw new Error('Selector and type are required');
    }
  }

  /**
   * Retrieves a locator based on title options.
   * @param {Page} page - The page object.
   * @param {string} text - The title text.
   * @param {string} type - The type of locator (filter, combine, or, concat, nth, first, last, default).
   * @param {any} options - The options for the locator.
   * @param {any} filterOptions - The filter options.
   * @param {any} subLocator - The sub-locator.
   * @param {number} count - The count for the nth locator.
   * @throws {Error} Throws an error if selector and type are not provided.
   * @returns {Promise<Locator>} A Promise that resolves to the generated locator.
   * @developedBy   Anitha Ramachandran
   */
  public async getByTitleOption(
    page: Page,
    text: string,
    type: string = 'filter|combine|or|concat|nth|first|last|default',
    options?: any,
    filterOptions?: any,
    subLocator?: any,
    count: number = 0
  ): Promise<Locator> {
    let assignLocator;
    //validation to ensure required parameters are provided
    if (text && type) {
      try {
        switch (type) {
          case 'filter': // Conditional Locators
            assignLocator = filterOptions
              ? await page.getByTitle(text).filter(filterOptions)
              : await page.getByTitle(text, options).filter(filterOptions);
            break;

          case 'combine': // Combine two locators
            assignLocator =
              subLocator && options
                ? await page.getByTitle(text, options).and(subLocator)
                : await page.getByTitle(text).and(subLocator);
            break;

          case 'or': // Check one of the two alternatives
            assignLocator =
              subLocator && options
                ? await page.getByTitle(text, options).or(subLocator)
                : await page.getByTitle(text).or(subLocator);
            break;

          case 'concat': // Concatenate the getByTitle element
            assignLocator =
              subLocator && options
                ? await page.getByTitle(text, options).getByTitle(subLocator)
                : await page.getByTitle(text).getByTitle(subLocator);
            break;

          case 'nth': // Nth element
            assignLocator = options
              ? page.getByTitle(text, options).nth(count)
              : page.getByTitle(text).nth(count);
            break;

          case 'first': // First element
            assignLocator = options
              ? await page.getByTitle(text, options).first()
              : await page.getByTitle(text).first();
            break;

          case 'last': // Last element
            assignLocator = options
              ? await page.getByTitle(text, options).last()
              : await page.getByTitle(text).last();
            break;

          default: // default locator with option else without options
            assignLocator = options
              ? await page.getByTitle(text, options)
              : await page.getByTitle(text);
            break;
        }
      } catch (error) {
        Logger.error('Error in getByTitleOptions method: ' + error);
      }
      Logger.info(`LOCATOR  ${assignLocator}`);
      return assignLocator || page.locator('html'); // Returning a default value if assignLocator is undefined
    } else {
      throw new Error('Selector and type are required');
    }
  }

  /**
   * Retrieves a locator based on test ID options.
   * @param {Page} page - The page object.
   * @param {string} testId - The test ID.
   * @param {string} type - The type of locator (concat, nth, first, last, default).
   * @param {string} subLocator - The sub-locator.
   * @param {number} count - The count for the nth locator.
   * @throws {Error} Throws an error if ID and type are not provided.
   * @returns {Locator | undefined} The generated locator or undefined if not found.
   * @developedBy   Anitha Ramachandran
   */

  public async getTestIdOption(
    page: Page,
    testId: string,
    type: string = 'concat|nth|first|last|default',
    subLocator?: string,
    count?: number
  ): Promise<Locator> {
    let assignlocator;
    //validation to ensure required parameters are provided
    if (testId && type) {
      try {
        switch (type) {
          case 'concat':
            if (subLocator) {
              assignlocator = await page.getByTestId(testId).getByTestId(subLocator);
            }
            break;

          case 'nth':
            if (count) {
              assignlocator = await page.getByTestId(testId).nth(count);
            }
            break;

          case 'first':
            if (!subLocator) {
              assignlocator = await page.getByTestId(testId).first();
            }
            break;

          case 'last':
            if (!subLocator) {
              assignlocator = await page.getByTestId(testId).last();
            }
            break;

          default:
            assignlocator = await page.getByTestId(testId);
            break;
        }
      } catch (error) {
        // Handle any errors that occur during element retrieval or filtering
        Logger.error('An error occurred:' + error);
      }
      Logger.info(`LOCATOR  ${assignlocator}`);
      return assignlocator || page.locator('html'); // Returning a default value if assignLocator is undefined
    } else {
      throw new Error('ID and type are required');
    }
  }

  /**
   * Retrieves all elements matching the provided selector based on the specified locator method
   * @param {Page} page - The page context for element interaction
   * @param {string} [locatorMethodName="locator|role|text|placeHolder|altText|label|title|testId"] - The method used for locating the element
   * @param {any} selector - The selector for locating the element
   * @param {any} [filteringType] - The type of filtering to be applied
   * @param {any} [selectorOptions] - Additional options for the selector
   * @param {any} [filterOptions] - Additional filtering options
   * @param {any} [subLocator] - Sub-locator for element identification
   * @param {any} [clickOptions] - Additional click options
   * @returns {Promise<Array<Locator>>} - Array of located elements
   * @developedBy   Anitha Ramachandran
   */

  public async all(
    page: Page,
    locatorMethodName: string = 'locator|role|text|placeHolder|altText|label|title|testId',
    selector: any,
    filteringType?: any,
    selectorOptions?: any,
    filterOptions?: any,
    subLocator?: any,
    clickOptions?: any
  ): Promise<Array<Locator>> {
    let element;
    //validation to ensure required parameters are provided
    if (selector && locatorMethodName) {
      switch (locatorMethodName) {
        case 'role':
          // Locate element by role
          console.log(selector, 'OPTIONS', selectorOptions);
          element = await this.getByRoleOption(
            page,
            selector,
            filteringType,
            selectorOptions,
            filterOptions,
            subLocator
          );
          break;

        case 'text':
          // Locate element by text
          element = await this.getByTextOption(
            page,
            selector,
            filteringType,
            selectorOptions,
            filterOptions,
            subLocator
          );
          break;

        case 'placeHolder':
          // Locate element by placeholder
          element = await this.getByPlaceholderOption(
            page,
            selector,
            filteringType,
            selectorOptions,
            filterOptions,
            subLocator
          );
          break;

        case 'altText':
          // Locate element by alt text
          element = await this.getByAltTextOption(
            page,
            selector,
            filteringType,
            selectorOptions,
            filterOptions,
            subLocator
          );
          break;

        case 'label':
          // Locate element by label
          element = await this.getByLabelOption(
            page,
            selector,
            filteringType,
            selectorOptions,
            filterOptions,
            subLocator
          );
          break;

        case 'title':
          // Locate element by title
          element = await this.getByTitleOption(
            page,
            selector,
            filteringType,
            selectorOptions,
            filterOptions,
            subLocator
          );
          break;

        case 'testId':
          // Locate element by test ID
          element = await this.getTestIdOption(
            page,
            selector,
            filteringType,
            subLocator,
            filterOptions
          );
          break;

        default:
          // Locate element using specified locator options
          element = await this.locatorOptions(
            page,
            selector,
            filteringType,
            selectorOptions,
            filterOptions,
            subLocator
          );
          // const elementTexts = await elementLocator.evaluate((element) => element.textContent);
          break;
      }
      if (await element.isVisible()) {
        Logger.info('Element is  visible');
        // Returning a default value if assignLocator is undefined
      } else {
        Logger.error('Element is not visible');
      }

      return element.all() || page.locator('html');
    } else {
      throw new Error('Selector and locator method name are required');
    }
  }

  /**
   * Locates a web element based on the provided locator method and selector
   * @param {Page} page - The page context for element interaction
   * @param {string} [locatorMethodName="locator|role|text|placeHolder|altText|label|title|testId"] - The method used for locating the element
   * @param {any} selector - The selector for locating the element
   * @param {any} [filteringType] - The type of filtering to be applied
   * @param {any} [selectorOptions] - Additional options for the selector
   * @param {any} [filterOptions] - Additional filtering options
   * @param {any} [subLocator] - Sub-locator for element identification
   * @returns {Promise<Locator>} - The located element
   * @throws {Error} - Throws an error if there is a problem with the element.
   * @developedBy   Anitha Ramachandran
   */

  public async element(
    page: Page,
    locatorMethodName = 'locator|role|text|placeHolder|altText|label|title|testId',
    selector: any,
    filteringType?: any,
    selectorOptions?: any,
    filterOptions?: any,
    subLocator?: any
  ): Promise<Locator> {
    // validation to ensure required parameters are provided
    if (selector && locatorMethodName) {
      let element;
      switch (locatorMethodName) {
        case 'role':
          // Locate element by role
          console.log(selector, 'OPTIONS', selectorOptions);
          element = await this.getByRoleOption(
            page,
            selector,
            filteringType,
            selectorOptions,
            filterOptions,
            subLocator
          );
          Logger.info(`Element located by role: ${element}`);
          break;
        case 'text':
          // Locate element by text
          element = await this.getByTextOption(
            page,
            selector,
            filteringType,
            selectorOptions,
            filterOptions,
            subLocator
          );
          Logger.info(`Element located by text: ${element}`);
          break;
        case 'placeHolder':
          // Locate element by placeholder
          element = await this.getByPlaceholderOption(
            page,
            selector,
            filteringType,
            selectorOptions,
            filterOptions,
            subLocator
          );
          Logger.info(`Element located by placeholder: ${element}`);
          break;
        case 'altText':
          // Locate element by alt text
          element = await this.getByAltTextOption(
            page,
            selector,
            filteringType,
            selectorOptions,
            filterOptions,
            subLocator
          );
          Logger.info(`Element located by alt text: ${element}`);
          break;
        case 'label':
          // Locate element by label
          element = await this.getByLabelOption(
            page,
            selector,
            filteringType,
            selectorOptions,
            filterOptions,
            subLocator
          );
          Logger.info(`Element located by label: ${element}`);
          break;
        case 'title':
          // Locate element by title
          element = await this.getByTitleOption(
            page,
            selector,
            filteringType,
            selectorOptions,
            filterOptions,
            subLocator
          );
          Logger.info(`Element located by title: ${element}`);
          break;
        case 'testId':
          // Locate element by test ID
          element = await this.getTestIdOption(
            page,
            selector,
            filteringType,
            subLocator,
            filterOptions
          );
          Logger.info(`Element located by test ID: ${element}`);
          break;
        default:
          // Locate element using specified locator options
          element = await this.locatorOptions(
            page,
            selector,
            filteringType,
            selectorOptions,
            filterOptions,
            subLocator
          );
          Logger.info(`Element located by locator: ${element}`);
          break;
      }

      if (await element.isVisible()) {
        Logger.info(`Element is visible`);
        return element;
      } else {
        Logger.error('Element is not visible');
        throw new Error(`Element is not visible`);
      }
    } else {
      Logger.error('Required parameters not provided');
      throw new Error('Required parameters not provided');
    }
  }

  /**
   * Retrieves frame locator based on the specified options.
   *
   * @param {string} options The option to determine the type of frame locator to retrieve
   * @param {Locator} locator The main locator for the frame
   * @param {string} subLocatorString Sub-locator string if applicable
   * @param {any} subLocatorOptions Additional sub-locator options (optional)
   * @param {number} nthindexnumber Index number if option is 'nth'
   * @returns {Promise<any>} A promise that resolves to the frame locator based on the specified options
   * @developedBy   Anitha Ramachandran
   */
  async frameLocator(
    page: Page,
    options: string = 'fdefault|first|last|locator|nth|altText|frameLocator|role|text|placeHolder|altText|label|title|testId',
    locator: string,
    subLocatorString?: any,
    nthindexnumber: number = 0,
    subLocatorOptions?: any
  ): Promise<Locator | number | FrameLocator> {
    const frameLocator = page.frameLocator(locator);

    try {
      Logger.info(`FrameLocator for ${options} is selected`);
      switch (options) {
        case 'first':
          return await frameLocator.first();
        case 'last':
          return await frameLocator.last();
        case 'locator':
          return await frameLocator.locator(subLocatorString, subLocatorOptions);
        case 'nth':
          return await frameLocator.nth(nthindexnumber);
        case 'altText':
          return await frameLocator.getByAltText(subLocatorString, subLocatorOptions);
        case 'role':
          return await frameLocator.getByRole(subLocatorString, subLocatorOptions);
        case 'text':
          return await frameLocator.getByText(subLocatorString, subLocatorOptions);
        case 'placeHolder':
          return await frameLocator.getByPlaceholder(subLocatorString, subLocatorOptions);
        case 'label':
          return await frameLocator.getByLabel(subLocatorString, subLocatorOptions);
        case 'title':
          return await frameLocator.getByTitle(subLocatorString, subLocatorOptions);
        case 'testId':
          return await frameLocator.getByTestId(subLocatorString);
        default:
          return await frameLocator;
      }
    } catch (error) {
      Logger.error(`Error in FrameLocator: ${error}`);
      throw new Error(`Error in FrameLocator: ${error}`);
    }
  }
}
