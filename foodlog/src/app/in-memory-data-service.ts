import { InMemoryDbService } from 'angular-in-memory-web-api';
import { LogRecord } from './log-record';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const logDay = [
      /*new LogRecord('string cheese', 100, 12, 10, 2, 1, new Date(Date.now())),
      new LogRecord('apple', 80, 14, 2, 0, 1, new Date(Date.now())),
      new LogRecord('ham sandwich', 250, 22, 12, 7, 1, new Date(Date.now())) */
      {'id' : 1,
       'name' : 'string cheese', 
       'calories' : 100,
       'fat' : 12,
       'carbs' : 10,
       'protein' : 2,
       'servings' : 1,
       'date' : new Date(Date.now())
     }
    ];

    return {logDay};
  }
}