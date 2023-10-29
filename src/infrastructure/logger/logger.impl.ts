import { ILogger } from '../../domain/logger/logger.interface';
import winston from 'winston';

export class LoggerImpl implements ILogger {
  readonly logger: any;
  constructor() {
    this.logger = winston.createLogger({
      transports: [new winston.transports.Console()],
    });
  }
  debug(context: string, message: string) {
    if (process.env.NODE_ENV !== 'production') {
      this.logger.debug(`[DEBUG] ${message}`, context);
    }
  }
  log(context: string, message: string) {
    this.logger.log(`[INFO] ${message}`, context);
  }
  error(context: string, message: string, trace?: string) {
    this.logger.error(`[ERROR] ${message}`, trace, context);
  }
  warn(context: string, message: string) {
    this.logger.warn(`[WARN] ${message}`, context);
  }
  verbose(context: string, message: string) {
    if (process.env.NODE_ENV !== 'production') {
      this.logger.verbose(`[VERBOSE] ${message}`, context);
    }
  }
}
