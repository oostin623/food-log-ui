import { Injectable} from '@angular/core';
//FIXME: make this into a fancy behavior subject that returns a full array of values.
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LogRecord } from './log-record';

import { Observable } from 'rxjs/Observable';
//import { Subject } from 'rxjs/Subject';


@Injectable()
export class LogService {

  private _LogDaySource: BehaviorSubject<LogRecord[]>;
  private _LogDayStore: {
  	records: LogRecord[]
  };


  constructor() {
  	this._LogDayStore = { records: [] };
  	this._LogDaySource = <BehaviorSubject<LogRecord[]>>new BehaviorSubject([]);
  }

   getLogDay(): Observable<any> {
    return this._LogDaySource.asObservable();
  }

  setLogDay(records: LogRecord[]) {
  	this._LogDayStore.records = records;
  }


 



}
