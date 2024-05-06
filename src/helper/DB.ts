import * as sql from 'mssql';
import oracledb from 'oracledb';
import DBConstants from './DBConstants';
import Logger from './Log';

export default class DB {
  /**
   * Executes the query on MSSQL database
   * @param dbConfig data base configuration
   * @param query to be executed
   * @returns record set
   * @developedBy Anitha Ramachandran
   */

  public static async executeMSSQLQuery(dbConfig: string, query: string) {
    try {
      Logger.info(`Executing MSSQL query : ${query}`);
      const pool = await sql.connect(`${dbConfig}${DBConstants.CERTIFICATE}`);
      const result = await pool.request().query(query);
      Logger.info(`Results  : ${{ rows: result.recordset, rowsAffected: result.rowsAffected }}`);
      return { rows: result.recordset, rowsAffected: result.rowsAffected };
    } catch (err) {
      Logger.error(`Error while executing query\n${err}`);
      throw new Error(`Error while executing query\n${err}`);
    }
  }

  /**
   * Executes the query on Oracle database
   * @param dbConfig data base configuration
   * @param query to be executed
   * @returns record set
   * @developedBy Anitha Ramachandran
   */

  public static async executeOracleQuery(dbConfig: string, query: string) {
    const configs = dbConfig.split(DBConstants.SEMICOLON);
    const config = {
      user: configs[0].replace(DBConstants.USER, DBConstants.BLANK).trim(),
      password: configs[1].replace(DBConstants.PASSWORD, DBConstants.BLANK).trim(),
      connectString: configs[2].replace(DBConstants.CONNECTION_STRING, DBConstants.BLANK).trim(),
    };
    let connection: oracledb.Connection | undefined = undefined; // Initialize connection
    try {
      Logger.info('Connecting to Oracle database...');
      connection = await oracledb.getConnection(config);
      Logger.info(`Executing Oracle query....${query}`);
      const result = await connection.execute(query);
      Logger.info(`Results  : ${{ rows: result.rows, rowsAffected: result.rowsAffected }}`);
      return { rows: result.rows, rowsAffected: result.rowsAffected };
    } catch (err) {
      Logger.error(`Error while executing query\n${err}`);
      throw new Error(`Error while executing query\n${err}`);
    } finally {
      if (connection) {
        try {
          Logger.info('Closing Oracle connection...');
          await connection.close();
        } catch (err) {
          Logger.error(`Error while closing connection\n${err}`);
        }
      }
    }
  }

  /**
   * Executes the query on DB2 database
   * @param dbConfig data base configuration
   * @param query to be executed
   * @returns record set
   * @developedBy Anitha Ramachandran
   */

  public static async executeDB2Query(dbConfig: string, query: string) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const ibmdb = require('ibm_db');
    let connection: any;
    try {
      Logger.info('Opening DB2 connection...');
      connection = ibmdb.openSync(`${dbConfig}${DBConstants.PROTOCOL}`);
      Logger.info(`Executing DB2 query...${query}`);
      const result = connection.querySync(query);
      return { rows: result, rowsAffected: result.length };
    } catch (error) {
      throw new Error(`Error while executing query\n${error}`);
    } finally {
      if (connection) {
        try {
          Logger.info('Closing DB2 connection...');
          connection.closeSync();
        } catch (err) {
          Logger.error(`Error while closing connection\n${err}`);
        }
      }
    }
  }
}
