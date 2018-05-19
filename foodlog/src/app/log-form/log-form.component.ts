import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { LogRecord } from '../log-record';
import  { LogService } from '../log.service';

@Component({
  selector: 'app-log-form',
  providers: [LogService],
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent {
  logDay : LogRecord[] = [];
  formLogRecord : LogRecord = new LogRecord('String Cheese', 120, 8, 10, 5, 1, new Date(Date.now()));
  submitted = false;
  logDayState: LogRecord;
  subscription: Subscription;

  // inject the log service
  constructor(private logService: LogService) { 
      this.subscription = this.logService.getState().subscribe(
      logDayState => {
        console.log("log component: the logDayState was updated with the formLogRecord: " + JSON.stringify(logDayState));
        this.logDayState = logDayState;
        this.logDay.push(logDayState);
      });
  }

  ngOnInit() {
  	     this.logDayState = this.formLogRecord;
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }


  // form submission: 
  // push the form record onto the logDay, update the global state, create a new record
  onSubmit() {
  	this.submitted = true;
  	//this.logDayState = this.formLogRecord;
  	this.logService.setState(this.formLogRecord);
  	this.newRecord();
  }

  // create a new log record
  newRecord() {
    this.formLogRecord = new LogRecord('', 0, 0, 0, 0, 1, new Date(Date.now()));
  }

  // takes an "HH:MM" string and updates the hour and minute on the record's date
  setDateTime(time : number) {
  	var date : Date = new Date(this.formLogRecord.date);
  	var hm : string[] = time.toString().split(":");
  	date.setHours(Number.parseInt(hm[0]), Number.parseInt(hm[1]));
  	return date;
  }

  //TODO: remove when we are done
  get diagnostic() { 
  	return JSON.stringify(this.formLogRecord);
  }
}
