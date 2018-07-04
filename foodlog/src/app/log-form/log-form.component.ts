import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { LogRecord } from '../log-record';
import  { LogService } from '../log.service';

@Component({
  selector: 'app-log-form',
  providers: [],
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent {
  logDay: LogRecord[] = [];
  formLogRecord: LogRecord = new LogRecord(null, 'String Cheese', 120, 8, 10, 5, 1, new Date(Date.now()));
  submitted = false;

  // inject the log service
  constructor(private logService: LogService) { }

  // initialize the logDay from the service
  ngOnInit() { 
    this.getLogDay();
  }

  /** Get the initial LogDay state from the service */
  getLogDay(): void {
    this.logService.getLogDay()
      .subscribe(logDay => this.logDay = logDay);
  }


  /** form submission */
  onSubmit() {
  	this.submitted = true;
    this.logService.addLogRecord(this.formLogRecord)
      .subscribe(logRecord => {
        this.logDay.push(logRecord);
      });
  	this.newRecord();
  }

  // create a new log record
  newRecord() {
    this.formLogRecord = new LogRecord(null, 'dummy name', 0, 0, 0, 0, 1, new Date(Date.now()));
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
