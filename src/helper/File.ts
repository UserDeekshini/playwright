import Logger from './Log';
import fs from 'fs';
import pdfParse from 'pdf-parse';
export default class File {
  /**
   * Gets the text content of the pdf file
   * @param filePath File path
   * @returns PDF as text
   * @developedBy Anitha Ramachandran
   */

  public static async getText(filePath: string): Promise<string> {
    const buffer = fs.readFileSync(filePath);
    try {
      const data = await pdfParse(buffer);
      Logger.info(`${data.text}`);
      return data.text;
    } catch (err) {
      Logger.error(`${err}`);
      throw new Error(`${err}`);
    }
  }

  /**
   * Gets number of pages in pdf file
   * @param filePath File path
   * @returns Number of pages
   * @developedBy Anitha Ramachandran
   */

  public static async getNumberOfPages(filePath: string): Promise<number> {
    const buffer = fs.readFileSync(filePath);
    try {
      const data = await pdfParse(buffer);
      Logger.info(`${data.numpages}`);
      return data.numpages;
    } catch (err) {
      Logger.error(`${err}`);
      throw new Error(`${err}`);
    }
  }

  /**
   * Gets the information about the pdf file
   * @param filePath File path
   * @returns PDF document info
   * @developedBy Anitha Ramachandran
   */

  public static async getInfo(filePath: string): Promise<any> {
    const buffer = fs.readFileSync(filePath);
    try {
      const data = await pdfParse(buffer);
      Logger.info(`${data.info}`);
      return data.info;
    } catch (err) {
      Logger.error(`${err}`);
      throw new Error(`${err}`);
    }
  }

  /**
   * Recursively deletes a folder and its contents.
   * @param path - The path to the folder to be deleted.
   * @developedBy Anitha Ramachandran
   */

  public static deleteFolder(path: string): void {
    try {
      if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach((file) => {
          const curPath = path + '/' + file;
          Logger.info(`${curPath}`);
          if (fs.lstatSync(curPath).isDirectory()) {
            // recurse
            this.deleteFolder(curPath);
          } else {
            // delete file
            fs.unlinkSync(curPath);
          }
        });
        fs.rmdirSync(path);
      }
    } catch (error) {
      Logger.error(`Error deleting folder:, ${error}`);
    }
  }

  /**
   * Creates a folder if it does not exist.
   * @param path - The path of the folder to be created.
   * @developedBy Anitha Ramachandran
   */

  public static createFolder(path: string): void {
    try {
      if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
        Logger.info(`Folder created successfully at:, ${path}`);
      } else {
        Logger.info(`Folder already exists at:, ${path}`);
      }
    } catch (error) {
      Logger.error(`Error creating folder:, ${error}`);
    }
  }

  /**
   * Returns the file name that matches the specified pattern in the given path.
   * @param {string} path - The path to search for files.
   * @param {string} pattern - The pattern to match for the file name.
   * @returns {string} The file name that matches the pattern, empty string if not found.
   * @developedBy Anitha Ramachandran
   */

  public static getFileName(path: string, pattern: string) {
    let fileName = '';
    try {
      if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file) {
          Logger.info(
            pattern +
              ' : ' +
              file +
              ':' +
              file.indexOf(pattern) +
              ' : ' +
              (file.indexOf(pattern) != -1)
          );
          if (file.indexOf(pattern) != -1) {
            fileName = file;
          }
        });
      }
    } catch (error) {
      Logger.error('An error occurred while reading the files: ' + error);
    }
    return fileName;
  }

  /**
   * Reads any file based on the given path and pattern
   * @param {string} path - path to the file
   * @param {string} pattern - pattern to match the file
   * @returns {string} data read from the file
   * @developedBy Anitha Ramachandran
   */

  public static readanyfile(path: string, pattern: string) {
    try {
      const fileName = this.getFileName(path, pattern);
      const filePath = path + fileName;
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath);
        Logger.info(`Reading file: ${data}`);
        return data;
      } else {
        return 'No DATA';
      }
    } catch (error) {
      Logger.error(`Error reading file: ${error}`);
      throw new Error('An error occurred while reading the file.');
    }
  }
}
