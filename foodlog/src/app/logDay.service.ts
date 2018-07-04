import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { LogRecord } from './log-record';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LogDayService {

  private logDayUrl = 'api/logDay';  // URL to web api
 
  constructor(private http: HttpClient) { }

  /** GET logDay from server */
  getLogDay(): Observable<LogRecord[]> {
    return this.http.get<LogRecord[]>(this.logDayUrl);
  }

  /** POST new logRecord to the server */
  addLogRecord(logRecord: LogRecord): Observable<LogRecord> {
    return this.http.post<LogRecord>(this.logDayUrl, logRecord, httpOptions);
  }

}
