import winston from 'winston';

const Logger = winston.createLogger({
  /**
   * Initialize the logger with console and file transports
   */
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.uncolorize({ level: true, message: true, raw: true }),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.align(),
        winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
      ),
    }),
    new winston.transports.File({
      filename: 'test-results/logs/execution.log',
      format: winston.format.combine(
        winston.format.uncolorize({ level: true, message: true, raw: true }),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.align(),
        winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
      ),
    }),
  ],
});

const TEST_SEPARATOR =
  '##############################################################################';

/**
 * Class for Logging messages to console and file
 */
export default class Log {
  /**
   * Log the beginning of a test scenario
   * @param scenario - The scenario name
   */
  public static testBegin(scenario: string): void {
    this.printLogs(`Scenario: ${scenario} - Started`, TEST_SEPARATOR);
  }
  /**
   * Log the Ending of a test scenario
   * @param scenario - The scenario name
   */
  public static testEnd(scenario: string, status: string): void {
    this.printLogs(`Scenario: ${scenario} - ${status}`, TEST_SEPARATOR);
  }
  /**
   * Print logs with separator
   * @param msg - The log message
   * @param separator - The separator string
   */
  private static printLogs(msg: string, separator: string) {
    Logger.info(separator);
    Logger.info(`${msg.toUpperCase()}`);
    Logger.info(separator);
  }

  /**
   * Log an info message
   * @param message - The info message to log
   */
  public static info(message: string): void {
    Logger.info(message);
  }

  /**
   * Log an info message
   * @param message - The info message to log
   */
  public static error(error: string): void {
    Logger.error(error);
  }
}
