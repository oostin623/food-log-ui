import { Injectable} from '@angular/core';

//FIXME: make this into a fancy behavior subject that returns a full array of values.
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LogRecord } from './log-record';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class LogService {

  // Observable source
  //private _LogDaySource = new BehaviorSubject<LogRecord[]>([]);

  // Observable stream
  //LogDay$= this._LogDaySource.asObservable();

  private logDayState = new Subject<LogRecord>();
  private logDayObservable: Observable<LogRecord>;

  constructor() {
  	this.logDayObservable = this.logDayState.asObservable();
  }

  setState(state: LogRecord) {
    this.logDayState.next(state);
  }

  getState(): Observable<any> {
    return this.logDayObservable;
  }


  // service command
  // this tells everything else the LogDay has changed.
 // changeLogDay(logday: LogRecord[]) {
    //this._LogDaySource.next(logday);
 // }
}
