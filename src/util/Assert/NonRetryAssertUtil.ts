import { Locator, Page, expect } from '@playwright/test';
import Logger from '../../helper/Log';

export default class NonRetryAssertUtil {
  /**
   * ================ ****** NON RETRY UTIL ******====================
   */

  /**
   * Checks if the actual value is equal to the expected value using the "toBe" matcher.
   * @param {any} actualValue - The actual value to compare.
   * @param {any} expected - The expected value to compare against.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the actual value is not equal to the expected value.
   * @developedBy Anitha Ramachandran
   */

  async toBe(actualValue: any, expected: any, assertNotType?: boolean) {
    try {
      Logger.info(`Asserting toBe with the expected value ${expected}`);
      if (assertNotType === false) {
        await expect(actualValue).toBe(expected);
      } else if (assertNotType === true) {
        await expect(actualValue).not.toBe(expected);
      } else {
        await expect.soft(actualValue).toBe(expected);
      }
      Logger.info(`Asserting toBe method with Actual : ${actualValue} Expected :  ${expected}`);
    } catch (error) {
      Logger.error(`Error in toBe method:  ${error}`);
      throw new Error('An error occurred in toBe method');
    }
  }

  /**
   * Checks if the value is close to the expected value within a specified number of digits using the "toBeCloseTo" matcher.
   * @param {number} value - The actual value to compare.
   * @param {number} expected - The expected value to compare against.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the actual value is not close to the expected value.
   * @param {number} [numDigits] - The number of digits to check for closeness.
   * @developedBy Anitha Ramachandran
   */

  async toBeCloseTo(value: number, expected: number, assertNotType?: boolean, numDigits?: number) {
    try {
      Logger.info(`Asserting toBeCloseTo with the expected value ${expected}`);
      if (assertNotType === false) {
        await expect(value).toBeCloseTo(expected, numDigits);
      } else if (assertNotType === true) {
        await expect(value).not.toBeCloseTo(expected, numDigits);
      } else {
        await expect.soft(value).toBeCloseTo(expected, numDigits);
      }
      Logger.info(`Asserting toBeCloseTo method with Actual : ${value} Expected :  ${expected}`);
    } catch (error) {
      Logger.error(`Error in toBeCloseTo method:  ${error}`);
      throw new Error('An error occurred in toBeCloseTo method');
    }
  }

  /**
   * Checks if the value is falsy using the "toBeFalsy" matcher.
   * @param {any} value - The value to check for falsy.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the value is not falsy.
   * @developedBy Anitha Ramachandran
   */

  async toBeFalsy(value: any, assertNotType?: boolean) {
    try {
      if (assertNotType === false) {
        //   await expect(value).toBeFalsy();
        Logger.info(`Asserting toBeFalsy with status  ${await expect(value).toBeFalsy()}`);
      } else if (assertNotType === true) {
        //   await expect(value).not.toBeFalsy();
        Logger.info(`Asserting not toBeFalsy with status  ${await expect(value).not.toBeFalsy()}`);
      } else {
        // await expect.soft(value).toBeFalsy();
        Logger.info(
          `Asserting soft toBeFalsy with status  ${await expect.soft(value).toBeFalsy()}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toBeFalsy method:  ${error}`);
      throw new Error('An error occurred in toBeFalsy method');
    }
  }

  /**
   * Checks if the value is truthy using the "toBeTruthy" matcher.
   * @param {any} value - The value to check for truthy.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the value is not truthy.
   * @developedBy Anitha Ramachandran
   */

  async toBeTruthy(value: any, assertNotType?: boolean) {
    try {
      if (assertNotType === false) {
        //await expect(value).toBeTruthy();
        Logger.info(`Asserting toBeTruthy with status  ${await expect(value).toBeTruthy()}`);
      } else if (assertNotType === true) {
        // await expect(value).not.toBeTruthy();
        Logger.info(
          `Asserting not toBeTruthy with status  ${await expect(value).not.toBeTruthy()}`
        );
      } else {
        //await expect.soft(value).toBeTruthy();
        Logger.info(
          `Asserting soft toBeTruthy with status  ${await expect.soft(value).toBeTruthy()}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toBeTruthy method:  ${error}`);
      throw new Error('An error occurred in toBeTruthy method');
    }
  }

  /**
   * Checks if the value is NaN using the "toBeNaN" matcher.
   * @param {any} value - The value to check if it is NaN.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the value is not NaN.
   * @developedBy Anitha Ramachandran
   */

  async toBeNaN(value: any, assertNotType?: boolean) {
    try {
      if (assertNotType === false) {
        Logger.info(`Asserting toBeNaN with status  ${await expect(value).toBeNaN()}`);
      } else if (assertNotType === true) {
        Logger.info(`Asserting not toBeNaN with status  ${await expect(value).not.toBeNaN()}`);
      } else {
        Logger.info(`Asserting soft toBeNaN with status  ${await expect.soft(value).toBeNaN()}`);
      }
    } catch (error) {
      Logger.error(`Error in toBeNaN method:  ${error}`);
      throw new Error('An error occurred in toBeNaN method');
    }
  }

  /**
   * Checks if the value is null using the "toBeNull" matcher.
   * @param {any} value - The value to check if it is null.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the value is not null.
   * @developedBy Anitha Ramachandran
   */

  async toBeNull(value: any, assertNotType?: boolean) {
    try {
      if (assertNotType === false) {
        Logger.info(`Asserting toBeNull with status  ${await expect(value).toBeNull()}`);
      } else if (assertNotType === true) {
        Logger.info(`Asserting toBeNull with status  ${await expect(value).not.toBeNull()}`);
      } else {
        Logger.info(`Asserting toBeNull with status  ${await expect.soft(value).toBeNull()}`);
      }
    } catch (error) {
      Logger.error(`Error in toBeNull method:  ${error}`);
      throw new Error('An error occurred in toBeNull method');
    }
  }

  /**
   * Checks if the value is undefined using the "toBeUndefined" matcher.
   * @param {any} value - The value to check if it is undefined.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the value is not undefined.
   * @developedBy Anitha Ramachandran
   */

  async toBeUndefined(value: any, assertNotType?: boolean) {
    try {
      if (assertNotType === false) {
        Logger.info(`Asserting toBeUndefined with status  ${await expect(value).toBeUndefined()}`);
      } else if (assertNotType === true) {
        Logger.info(
          `Asserting toBeUndefined with status  ${await expect(value).not.toBeUndefined()}`
        );
      } else {
        Logger.info(
          `Asserting toBeUndefined with status  ${await expect.soft(value).toBeUndefined()}`
        );
      }
    } catch (error) {
      Logger.error(`Error in toBeUndefined method:  ${error}`);
      throw new Error('An error occurred in toBeUndefined method');
    }
  }

  /**
   * Checks if the value is greater than the expected value using the "toBeGreaterThan" matcher.
   * @param {number} value - The actual value to compare.
   * @param {number} expected - The expected value to compare against.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the actual value is not greater than the expected value.
   * @developedBy Anitha Ramachandran
   */

  async toBeGreaterThan(value: number, expected: number, assertNotType?: boolean) {
    try {
      Logger.info(`Asserting toBeGreaterThan with the expected value ${expected}`);
      if (assertNotType === false) {
        await expect(value).toBeGreaterThan(expected);
      } else if (assertNotType === true) {
        await expect(value).not.toBeGreaterThan(expected);
      } else {
        await expect.soft(value).toBeGreaterThan(expected);
      }
      Logger.info(
        `Asserting toBeGreaterThan method with Actual : ${value} Expected :  ${expected}`
      );
    } catch (error) {
      Logger.error(`Error in toBeGreaterThan method:  ${error}`);
      throw new Error('An error occurred in toBeGreaterThan method');
    }
  }

  /**
   * Checks if the value is greater than or equal to the expected value using the "toBeGreaterThanOrEqual" matcher.
   * @param {number} value - The actual value to compare.
   * @param {number} expected - The expected value to compare against.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the actual value is not greater than or equal to the expected value.
   * @developedBy Anitha Ramachandran
   */

  async toBeGreaterThanOrEqual(value: number, expected: number, assertNotType?: boolean) {
    try {
      Logger.info(`Asserting toBeGreaterThanOrEqual with the expected value ${expected}`);
      if (assertNotType === false) {
        await expect(value).toBeGreaterThanOrEqual(expected);
      } else if (assertNotType === true) {
        await expect(value).not.toBeGreaterThanOrEqual(expected);
      } else {
        await expect.soft(value).toBeGreaterThanOrEqual(expected);
      }
      Logger.info(
        `Asserting toBeGreaterThanOrEqual method with Actual : ${value} Expected :  ${expected}`
      );
    } catch (error) {
      Logger.error(`Error in toBeGreaterThanOrEqual method:  ${error}`);
      throw new Error('An error occurred in toBeGreaterThanOrEqual method');
    }
  }

  /**
   * Checks if the value is an instance of the expected class or constructor function using the "toBeInstanceOf" matcher.
   * @param {any} page - The value to check the instance of.
   * @param {Function} expected - The expected class or constructor function.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the value is not an instance of the expected class or constructor function.
   * @developedBy Anitha Ramachandran
   */

  /*Commented this out for now.  Error for using `Function` as a type*/
  /*
    248:45  error    Don't use `Function` as a type. The `Function` type accepts any function-like value.
    It provides no type safety when calling the function, which can be a common source of bugs.
    It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.
    If you are expecting the function to accept certain arguments, you should explicitly define the function shape  @typescript-eslint/ban-types
  */
  // async toBeInstanceOf(page: any, expected: Function, assertNotType?: boolean) {
  //   try {
  //     Logger.info(`Asserting toBeInstanceOf`);
  //     if (assertNotType === false) {
  //       await expect(page).toBeInstanceOf(expected);
  //     } else if (assertNotType === true) {
  //       await expect(page).not.toBeInstanceOf(expected);
  //     } else {
  //       await expect.soft(page).toBeInstanceOf(expected);
  //     }
  //     Logger.info(`Asserting toBeInstanceOf method Expected :  ${expected}`);
  //   } catch (error) {
  //     Logger.error(`Error in toBeInstanceOf method:  ${error}`);
  //     throw new Error('An error occurred in toBeInstanceOf method');
  //   }
  // }
  /*Commented this out for now.  Error for using `Function` as a type*/

  async toBeInstanceOf(page: any, expected: new (...args: any[]) => any, assertNotType?: boolean) {
    try {
      Logger.info(`Asserting toBeInstanceOf`);
      if (assertNotType === false) {
        await expect(page).toBeInstanceOf(expected);
      } else if (assertNotType === true) {
        await expect(page).not.toBeInstanceOf(expected);
      } else {
        await expect.soft(page).toBeInstanceOf(expected);
      }
      Logger.info(`Asserting toBeInstanceOf method Expected :  ${expected}`);
    } catch (error) {
      Logger.error(`Error in toBeInstanceOf method:  ${error}`);
      throw new Error('An error occurred in toBeInstanceOf method');
    }
  }

  /**
   * Checks if the value is less than the expected value using the "toBeLessThan" matcher.
   * @param {number} value - The actual value to compare.
   * @param {number} expected - The expected value to compare against.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the actual value is not less than the expected value.
   * @developedBy Anitha Ramachandran
   */

  async toBeLessThan(value: number, expected: number, assertNotType?: boolean) {
    try {
      Logger.info(`Asserting toBeLessThanwith the expected value ${expected}`);
      if (assertNotType === false) {
        await expect(value).toBeLessThan(expected);
      } else if (assertNotType === true) {
        await expect(value).not.toBeLessThan(expected);
      } else {
        await expect.soft(value).toBeLessThan(expected);
      }
      Logger.info(`Asserting toBeLessThan method with Actual : ${value} Expected :  ${expected}`);
    } catch (error) {
      Logger.error(`Error in toBeLessThan method:  ${error}`);
      throw new Error('An error occurred in toBeLessThan method');
    }
  }

  /**
   * Checks if the value is less than or equal to the expected value using the "toBeLessThanOrEqual" matcher.
   * @param {number} value - The actual value to compare.
   * @param {number} expected - The expected value to compare against.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the actual value is not less than or equal to the expected value.
   * @developedBy Anitha Ramachandran
   */

  async toBeLessThanOrEqual(value: number, expected: number, assertNotType?: boolean) {
    try {
      Logger.info(`Asserting toBeLessThanOrEqual the expected value ${expected}`);
      if (assertNotType === false) {
        await expect(value).toBeLessThanOrEqual(expected);
      } else if (assertNotType === true) {
        await expect(value).not.toBeLessThanOrEqual(expected);
      } else {
        await expect.soft(value).toBeLessThanOrEqual(expected);
      }
      Logger.info(
        `Asserting toBeLessThanOrEqual method with Actual : ${value} Expected :  ${expected}`
      );
    } catch (error) {
      Logger.error(`Error in toBeLessThanOrEqual method:  ${error}`);
      throw new Error('An error occurred in toBeLessThanOrEqual method');
    }
  }

  /**
   * Checks if the actual value contains the expected value using the "toContain" matcher.
   * @param {any} actualValue - The actual value to check for containment.
   * @param {any} expected - The expected value to check for in the actual value.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the actual value does not contain the expected value.
   * @developedBy Anitha Ramachandran
   */

  async toContain(actualValue: any, expected: any, assertNotType?: boolean) {
    try {
      Logger.info(`Asserting toContain the expected value ${expected}`);
      if (assertNotType === false) {
        await expect(actualValue).toContain(expected);
      } else if (assertNotType === true) {
        await expect(actualValue).not.toContain(expected);
      } else {
        await expect.soft(actualValue).toContain(expected);
      }
      Logger.info(
        `Asserting toContain method with Actual : ${actualValue} Expected :  ${expected}`
      );
    } catch (error) {
      Logger.error(`Error in toContain method:  ${error}`);
      throw new Error('An error occurred in toContain method');
    }
  }

  /**
   * Checks if the actual value contains the expected value with deep equality using the "toContainEqual" matcher.
   * @param {any} actualValue - The actual value to check for containment with deep equality.
   * @param {any} expected - The expected value to check for in the actual value with deep equality.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the actual value does not contain the expected value with deep equality.
   * @developedBy Anitha Ramachandran
   */

  async toContainEqual(actualValue: any, expected: any, assertNotType?: boolean) {
    try {
      Logger.info(`Asserting toContainEqual the expected value ${expected}`);
      if (assertNotType === false) {
        await expect(actualValue).toContainEqual(expected);
      } else if (assertNotType === true) {
        await expect(actualValue).not.toContainEqual(expected);
      } else {
        await expect.soft(actualValue).toContainEqual(expected);
      }
      Logger.info(
        `Asserting toContainEqual method with Actual : ${actualValue} Expected :  ${expected}`
      );
    } catch (error) {
      Logger.error(`Error in toContainEqual method:  ${error}`);
      throw new Error('An error occurred in toContainEqual method');
    }
  }

  /**
   * Checks if the actual value is equal to the expected value using the "toEqual" matcher.
   * @param {any} actualValue - The actual value to compare.
   * @param {any} expected - The expected value to compare against.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the actual value is not equal to the expected value.
   * @developedBy Anitha Ramachandran
   */

  async toEqual(actualValue: any, expected: any, assertNotType?: boolean) {
    try {
      Logger.info(`Asserting toEqual the expected value ${expected}`);
      if (assertNotType === false) {
        await expect(actualValue).toEqual(expected);
      } else if (assertNotType === true) {
        await expect(actualValue).not.toEqual(expected);
      } else {
        await expect.soft(actualValue).toEqual(expected);
      }
      Logger.info(`Asserting toEqual method with Actual : ${actualValue} Expected :  ${expected}`);
    } catch (error) {
      Logger.error(`Error in toEqual method:  ${error}`);
      throw new Error('An error occurred in toEqual method');
    }
  }

  /**
   * Checks if the actual value has the expected length using the "toHaveLength" matcher.
   * @param {number} actualValue - The actual value to check the length of.
   * @param {number} expected - The expected length to compare against.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the actual value does not have the expected length.
   * @developedBy Anitha Ramachandran
   */

  async toHaveLength(actualValue: number, expected: number, assertNotType?: boolean) {
    try {
      Logger.info(`Asserting toHaveLength the expected value ${expected}`);
      if (assertNotType === false) {
        await expect(actualValue).toHaveLength(expected);
      } else if (assertNotType === true) {
        await expect(actualValue).not.toHaveLength(expected);
      } else {
        await expect.soft(actualValue).toHaveLength(expected);
      }
      Logger.info(
        `Asserting toHaveLength method with Actual : ${actualValue} Expected :  ${expected}`
      );
    } catch (error) {
      Logger.error(`Error in toHaveLength method:  ${error}`);
      throw new Error('An error occurred in toHaveLength method');
    }
  }

  /**
   * Checks if the actual value has the expected property using the "toHaveProperty" matcher.
   * @param {any} actualValue - The actual value to check for the property.
   * @param {any} expected - The expected property to check for in the actual value.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the actual value does not have the expected property.
   * @developedBy Anitha Ramachandran
   */

  async toHaveProperty(actualValue: any, expected: any, assertNotType?: boolean) {
    try {
      Logger.info(`Asserting toHaveProperty the expected value ${expected}`);
      if (assertNotType === false) {
        await expect(actualValue).toHaveProperty(expected);
      } else if (assertNotType === true) {
        await expect(actualValue).not.toHaveProperty(expected);
      } else {
        await expect.soft(actualValue).toHaveProperty(expected);
      }
      Logger.info(
        `Asserting toHaveProperty method with Actual : ${actualValue} Expected :  ${expected}`
      );
    } catch (error) {
      Logger.error(`Error in toHaveProperty method:  ${error}`);
      throw new Error('An error occurred in toHaveProperty method');
    }
  }

  /**
   * Checks if the actual value matches the expected value using the "toMatch" matcher.
   * @param {any} actualValue - The actual value to match against.
   * @param {any} expected - The expected value to match against.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the actual value does not match the expected value.
   * @developedBy Anitha Ramachandran
   */

  async toMatch(actualValue: any, expected: any, assertNotType?: boolean) {
    try {
      Logger.info(`Asserting toMatch the expected value ${expected}`);
      if (assertNotType === false) {
        await expect(actualValue).toMatch(expected);
      } else if (assertNotType === true) {
        await expect(actualValue).not.toMatch(expected);
      } else {
        await expect.soft(actualValue).toMatch(expected);
      }
      Logger.info(`Asserting toMatch method with Actual : ${actualValue} Expected :  ${expected}`);
    } catch (error) {
      Logger.error(`Error in toMatch method:  ${error}`);
      throw new Error('An error occurred in toMatch method');
    }
  }

  /**
   * Checks if the actual value matches the expected object using the "toMatchObject" matcher.
   * @param {any} actualValue - The actual value to match against.
   * @param {any} expected - The expected object to match against.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the actual value does not match the expected object.
   * @developedBy Anitha Ramachandran
   */

  async toMatchObject(actualValue: any, expected: any, assertNotType?: boolean) {
    try {
      Logger.info(`Asserting toMatchObject the expected value ${expected}`);
      if (assertNotType === false) {
        await expect(actualValue).toMatchObject(expected);
      } else if (assertNotType === true) {
        await expect(actualValue).not.toMatchObject(expected);
      } else {
        await expect.soft(actualValue).toMatchObject(expected);
      }
      Logger.info(
        `Asserting toMatchObject method with Actual : ${actualValue} Expected :  ${expected}`
      );
    } catch (error) {
      Logger.error(`Error in toMatchObject method:  ${error}`);
      throw new Error('An error occurred in toMatchObject method');
    }
  }

  /**
   * Checks if the actual value is strictly equal to the expected value using the "toStrictEqual" matcher.
   * @param {any} actualValue - The actual value to compare.
   * @param {any} expected - The expected value to compare against.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the actual value is not strictly equal to the expected value.
   * @developedBy Anitha Ramachandran
   */

  async toStrictEqual(actualValue: any, expected: any, assertNotType?: boolean) {
    try {
      Logger.info(`Asserting toStrictEqual the expected value ${expected}`);
      if (assertNotType === false) {
        await expect(actualValue).toStrictEqual(expected);
      } else if (assertNotType === true) {
        await expect(actualValue).not.toStrictEqual(expected);
      } else {
        await expect.soft(actualValue).toStrictEqual(expected);
      }
      Logger.info(
        `Asserting toStrictEqual method with Actual : ${actualValue} Expected :  ${expected}`
      );
    } catch (error) {
      Logger.error(`Error in toStrictEqual method:  ${error}`);
      throw new Error('An error occurred in toStrictEqual method');
    }
  }

  /**
   * Checks if the actual value throws the expected value using the "toThrow" matcher.
   * @param {any} actualValue - The actual value to check for throwing an error.
   * @param {any} expected - The expected error to check for in the actual value.
   * @param {boolean} [assertNotType] [Default-> Soft Assertion] - Whether to assert the actual value does not throw the expected error.
   * @developedBy Anitha Ramachandran
   */

  async toThrow(actualValue: any, expected: any, assertNotType?: boolean) {
    try {
      Logger.info(`Asserting toThrow the expected value ${expected}`);
      if (assertNotType === false) {
        await expect(actualValue).toThrow(expected);
      } else if (assertNotType === true) {
        await expect(actualValue).not.toThrow(expected);
      } else {
        await expect.soft(actualValue).toThrow(expected);
      }
      Logger.info(`Asserting toThrow method with Actual : ${actualValue} Expected :  ${expected}`);
    } catch (error) {
      Logger.error(`Error in toThrow method:  ${error}`);
      throw new Error('An error occurred in toThrow method');
    }
  }
}
