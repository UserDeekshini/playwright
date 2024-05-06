import * as fs from 'fs';
import * as XLSX from 'xlsx';
import Logger from './Log';

export class Excel {
  /**
   * Converts Excel data to JSON format
   * @param {string} datafilename - name of the Excel file
   * @developedBy Anitha Ramachandran
   */

  public static async convertExcelToJSON(datafilename: string) {
    try {
      Logger.info(`Test Data is Loaded and converting to Json`);

      // Load the Excel file
      const workbook: XLSX.WorkBook = XLSX.readFile(datafilename);
      const sheetNames: string[] = workbook.SheetNames;

      const jsonData: any = {};

      sheetNames.forEach((sheetName) => {
        const sheet: XLSX.WorkSheet = workbook.Sheets[sheetName];
        const sheetData: any[] = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        let headerRowIndex: number = -1;
        sheetData.forEach((row: any, index: number) => {
          if (row.includes('TestCase ID') && row.includes('Description') && row.includes('Input')) {
            headerRowIndex = index;
          }
        });

        if (headerRowIndex !== -1) {
          const header: any = sheetData[headerRowIndex];
          const columnIndex: any = {
            'TestCase ID': header.indexOf('TestCase ID'),
            Description: header.indexOf('Description'),
            Input: header.indexOf('Input'),
          };

          const sheetJsonData: any[] = [];
          for (let i = headerRowIndex + 1; i < sheetData.length; i++) {
            const row = sheetData[i];
            if (row.filter(Boolean).length === 0) {
              break; // Stop if empty row encountered
            }
            sheetJsonData.push({
              TestCaseId: columnIndex['TestCase ID'] !== -1 ? row[columnIndex['TestCase ID']] : '',
              Description: columnIndex['Description'] !== -1 ? row[columnIndex['Description']] : '',
              Input: columnIndex['Input'] !== -1 ? row[columnIndex['Input']] : '',
            });
          }

          jsonData[sheetName] = sheetJsonData;
        } else {
          Logger.error('Header row not found for sheet: ' + sheetName);
        }
      });

      // Write JSON data to a file named after the Excel file
      const jsonFileName: string = datafilename.replace('.xlsx', '.json');
      fs.writeFileSync(jsonFileName, JSON.stringify(jsonData, null, 2));
      Logger.info(`All sheets converted to a single JSON file: ${jsonFileName}`);
    } catch (error) {
      Logger.error(`Error while converting Excel to JSON\n${error}`);
      throw new Error(`Error while converting Excel to JSON\n${error}`);
    }
  }
}
