import { Injectable} from '@angular/core';
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

  setState(state: LogRecord) {
  	console.log("log service: setState() has been called with" + JSON.stringify(state));
    this.logDayState.next(state);
  }

  getState(): Observable<any> {
  	console.log("log service: getState() has been called. returning the LogRecord observable:" + JSON.stringify(this.logDayState));
  	console.log("log service: the observable version of the LogRecord: " + this.logDayState.asObservable.toString());
    return this.logDayState.asObservable();
  }


  // service command
  // this tells everything else the LogDay has changed.
 // changeLogDay(logday: LogRecord[]) {
    //this._LogDaySource.next(logday);
 // }
}
