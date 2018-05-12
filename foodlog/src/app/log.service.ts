import { Injectable } from '@angular/core';
import { LogRecord } from './log-record';

@Injectable()
export class LogService {
  logDay : LogRecord[] = [];

  constructor() { }

  getRecords(): LogRecord[] {
  	return this.logDay;
  }
}
