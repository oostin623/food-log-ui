import { Food } from './Food';

export class LogEntry {

	food: Food;
	time: string;
	servings: number;

	constructor (food: Food, time: string, servings: number) 
	{
		this.food = food;
		this.time = time;
		this.servings = servings;
	}
}