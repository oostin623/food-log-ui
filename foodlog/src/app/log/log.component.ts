import { Component, OnInit } from '@angular/core';

//data objects
import { LogEntry } from '../LogEntry';
import { Food } from '../Food';
import { FOODS } from '../Mock_foods';

/*
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
*/

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

	logOne: LogEntry = new LogEntry(FOODS[0], "timestamp", 1);
	logTwo: LogEntry = new LogEntry(FOODS[1], "timestamp", 1);
	logThree: LogEntry = new LogEntry(FOODS[2], "timestamp ", 1);

	logRecords: LogEntry[] = [this.logOne, this.logTwo, this.logThree];




  constructor() { }

  ngOnInit() {
  }

}
