import { Component, OnInit } from '@angular/core';

import { LogRecord } from '../log-record';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent {
  logDay : LogRecord[] = [];
  model : LogRecord = new LogRecord('String Cheese', 120, 8, 10, 5, 1, new Date(Date.now()));
  submitted = false;
  recordCounter = 0;

  //form submission
  onSubmit() {
  	this.submitted = true;
  	this.logDay[this.recordCounter] = this.model;
  	this.newRecord();
  	this.recordCounter++;
  }

  //create a new log record
  newRecord() {
    this.model = new LogRecord('', 0, 0, 0, 0, 1, new Date(Date.now()));
  }

  //takes an "HH:MM" string and updates the hour and minute on the record's date
  setDateTime(time : number) {
  	var date : Date = new Date(this.model.date);
  	var hm : string[] = time.toString().split(":");
  	date.setHours(Number.parseInt(hm[0]), Number.parseInt(hm[1]));
  	return date;
  }

  //TODO: remove when we are done
  get diagnostic() { 
  	return JSON.stringify(this.model);
  }
}
