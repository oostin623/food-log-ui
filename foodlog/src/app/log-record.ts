export class LogRecord {


	constructor(
		public id: number,
		public name: string,
		public calories: number,
		public fat: number,
		public carbs: number,
		public protein: number,
		public servings: number,
		public date: Date,
		){ }
}

