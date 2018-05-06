import { Component, OnInit } from '@angular/core';

import { LogRecord } from '../log-record';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent {

  model : LogRecord;
  submitted;
  dayCounter;

  //component start up
  ngOnInit() {
  	this.dayCounter = 0;
  	this.newRecord(); 	
  }

  //form submission
  onSubmit() {
  	this.submitted = true;
  }

  //TODO: remove when we are done
  get diagnostic() { 
  	return JSON.stringify(this.model);
  }

  newRecord() {
  	var date : Date = new Date(Date.now());
  	date.setDate(date.getDate() + this.dayCounter);

    this.model = new LogRecord('', 0, 0, 0, 0, 1, date);
    this.submitted = false;
    this.dayCounter++;
  }

  //takes an "HH:MM" string and updates the hour and minute on the record's date
  setDateTime(time : number) {
  	var date : Date = new Date(this.model.date);
  	var hm : string[] = time.toString().split(":");
  	date.setHours(Number.parseInt(hm[0]), Number.parseInt(hm[1]));
  	return date;
  }
}
