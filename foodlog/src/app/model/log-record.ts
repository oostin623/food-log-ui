import { Food } from './Food';

export class LogRecord {


	constructor(
		public id: number,
		public food: Food,
		public servings: number,
		public date: Date,
		public notes?: Text,
		){ }
}

