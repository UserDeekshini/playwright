import Logger from './Log';
import Tesseract from 'tesseract.js';
import { Locator } from '@playwright/test';
export default class ImageText {
  /**
   * Extracts text from an image using Tesseract OCR
   * @param {Locator} imageLocator - locator for the image element
   * @param {string} imagePath - path to save the image
   * @returns {string} extracted text from the image
   * @developedBy Anitha Ramachandran
   */

  public static async getImageText(imageLocator: Locator, imagePath: 'string') {
    const imageElement = await imageLocator;
    const name = Date.now();
    try {
      Logger.info(`Date ${name}`);
      const pathoftheImage = imagePath + `${name}.png`;
      await imageElement.screenshot({ path: pathoftheImage });
      const {
        data: { text },
      } = await Tesseract.recognize(imageElement);
      return text;
    } catch (error) {
      Logger.error(`Error while extracting text from image\n${error}`);
      throw new Error(`Error while extracting text from image\n${error}`);
    }
  }
}
