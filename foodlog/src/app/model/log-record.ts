import { Food } from './food';

export class LogRecord {

  constructor(
    public id: number,
    public food: Food,
    public servings: number,
    public date: string,
    public notes?: string,
    ) { }
}

