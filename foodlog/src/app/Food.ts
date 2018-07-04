export class Food {

	id: number;
	name: string;
	calories: number;

	constructor (
		id: number, 
		name: string, 
		calories: number,
		fat?: number,
		carbs?: number,
		protein?: number,
		servingUnit?: string, 
		servingSize?: number
		)
	{ 

		this.id = id;
		this.name = name;
		this.calories = calories;
	}

}