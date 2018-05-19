import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';


import { LogEntry } from '../LogEntry';
import { LogRecord } from '../log-record';
import { Food } from '../Food';
import { FOODS } from '../Mock_foods'; 

import  { LogService } from '../log.service';

@Component({
  selector: 'app-log',
  providers: [LogService],
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnDestroy {

  private subscription: Subscription;

  logDayState : LogRecord;
  logDay : LogRecord[] = [];
  

  constructor(private logService: LogService) { 

    this.logDayState = new LogRecord('Bagle', 200, 20, 5, 15, 1, new Date(Date.now()));

    this.subscription = this.logService.getState().subscribe(
      logDayState => {
        console.log("log component: the logDayState was updated with the formLogRecord: " + JSON.stringify(logDayState));
        this.logDayState = logDayState;
        this.logDay.push(logDayState);
      });
  }

  

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }


  //TODO: remove when we are done
  get diagnostic() { 
    return JSON.stringify(this.logDayState);
  }
}
