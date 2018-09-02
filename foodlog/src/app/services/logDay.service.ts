import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { tap } from 'rxjs/operators';
import { LogRecord } from '../model/log-record';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LogDayService {

  private logDayUrl = 'api/logDay';
  private logDaySource: BehaviorSubject<LogRecord[]> = new BehaviorSubject<LogRecord[]>([]);
  private LogDay$: Observable<LogRecord[]> = this.logDaySource.asObservable();

  constructor(private http: HttpClient) { }

  private loadLogDay() {
    this.http.get<LogRecord[]>(this.logDayUrl)
      .pipe(
        tap(data => console.log(data)),
      )
      .subscribe(
        data => this.logDaySource.next(data));
  }

  public getLogDay(): Observable<LogRecord[]> {
    return this.LogDay$;
  }

  public addRecord(logRecord: LogRecord) {
    this.http.post<LogRecord>(this.logDayUrl, logRecord, httpOptions)
      .subscribe(
        data => this.logDaySource.next(this.logDaySource.value.concat(data)));
  }
}
