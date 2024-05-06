import format from 'string-format';
import randomString from 'randomstring';
import Logger from './Log';

export default class Random {
  /**
   * This method will return the formatted String by replacing value in {\d}
   * @param str : String to be formatted
   * @param replaceValue : value to replaced in formatted string
   * @returns str
   * @developedBy Anitha Ramachandran
   */

  public static formatString(str: string, ...replaceValue: string[]): string {
    try {
      for (let i = 0; i < replaceValue.length; i++) {
        str = str.split(`{${i}}`).join(replaceValue[i]);
      }
    } catch (error) {
      Logger.error(`An error occurred while formatting the string: ${error}`);
    }
    return str;
  }

  /**
   * This method will return the formatted String by replacing value in {key}
   * @param str : String to be formatted
   * @param replaceValue : value to replaced in formatted string
   * @returns str
   * @developedBy Anitha Ramachandran
   */

  public static formatStringValue(str: string, replaceValue: any): string {
    try {
      // eslint-disable-next-line no-restricted-syntax
      for (const [key, value] of Object.entries(replaceValue)) {
        // eslint-disable-next-line no-param-reassign
        str = str.split(`{${key}}`).join(`${value}`);
      }
    } catch (error) {
      Logger.error(`An error occurred while formatting the string:, ${error}`);
    }
    return str;
  }

  /**
   * Replaces text in a string, using an string that supports replacement within a string.
   * @param str Original string
   * @param searchValue searches for and replace matches within the string.
   * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
   * @returns replacedStr
   * @developedBy Anitha Ramachandran
   */

  public static replaceAll(str: string, searchValue: string, replaceValue: string): string {
    try {
      const replacer = new RegExp(searchValue, 'g');
      const replacedStr = str.replace(replacer, replaceValue);
      return replacedStr;
    } catch (error) {
      console.error('An error occurred while replacing all occurrences in the string:', error);
      // You can handle the error as needed here
      return str; // Return the original string in case of an error
    }
  }

  /**
   * replaces the regex with string value
   * @param str
   * @param regex
   * @param value
   * @returns
   * @developedBy Anitha Ramachandran
   */

  public static getRegXLocator(str: string, regex: RegExp, value: string) {
    try {
      return str.replace(regex, value);
    } catch (error) {
      console.error(
        'An error occurred while applying the regular expression to the string:',
        error
      );
      return str; // Return the original string in case of an error
    }
  }

  /**
   * Generates random alphanumeric string of given length
   * @param length
   * @returns str
   * @developedBy Anitha Ramachandran
   */

  public static randomAlphanumericString(length: number): string {
    try {
      const str = randomString.generate(length);
      return str;
    } catch (error) {
      console.error('An error occurred while generating the random alphanumeric string:', error);
      // You can handle the error as needed here
      return ''; // Return an empty string in case of an error
    }
  }

  /**
   * Generates random string of given length
   * @param length
   * @returns str or empty string
   * @developedBy Anitha Ramachandran
   */

  public static randomAlphabeticString(length: number): string {
    try {
      const str = randomString.generate({ length: length, charset: 'alphabetic' });
      return str;
    } catch (error) {
      console.error('An error occurred while generating the random alphabetic string:', error);
      // You can handle the error as needed here
      return ''; // Return an empty string in case of an error
    }
  }

  /**
   * Generates random string of given length with all letters a as uppercase
   * @param length
   * @returns str or empty string
   * @developedBy Anitha Ramachandran
   */

  public static randomUppercaseString(length: number): string {
    try {
      const str = randomString.generate({
        length: length,
        charset: 'alphabetic',
        capitalization: 'uppercase',
      });
      return str;
    } catch (error) {
      console.error('An error occurred while generating the random uppercase string:', error);
      // You can handle the error as needed here
      return ''; // Return an empty string in case of an error
    }
  }

  /**
   * Generates random string of given length with all letters a as lowercase
   *@param length
   *@returns str or empty string
   *@developedBy Anitha Ramachandran
   */

  public static randomLowercaseString(length: number): string {
    try {
      const str = randomString.generate({
        length: length,
        charset: 'alphabetic',
        capitalization: 'lowercase',
      });
      return str;
    } catch (error) {
      console.error('An error occurred while generating the random lowercase string:', error);
      // You can handle the error as needed here
      return ''; // Return an empty string in case of an error
    }
  }

  /**
   * Generates random number string of given length
   *@param length
   *@returns str or empty string
   *@developedBy Anitha Ramachandran
   */

  public static randomNumberString(length: number): string {
    try {
      const str = randomString.generate({ length: length, charset: 'numeric' });
      return str;
    } catch (error) {
      console.error('An error occurred while generating the random number string:', error);
      // You can handle the error as needed here
      return ''; // Return an empty string in case of an error
    }
  }

  /**
   * This method will return the formatted String by replacing value in {key} from Object
   *@param str
   *@returns str or empty string
   *@developedBy Anitha Ramachandran
   */

  public static formatStringFromObject(str: string, obj: any): string {
    try {
      return format(str, obj);
    } catch (error) {
      console.error('An error occurred while formatting the string with the object:', error);
      // You can handle the error as needed here
      return str; // Return the original string in case of an error
    }
  }
}
