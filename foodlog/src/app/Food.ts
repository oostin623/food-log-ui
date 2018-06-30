export class Food {

	/**id: number;
	name: string;
	calories: number;
	servingUnit: string;
	servingSize: number;**/


	//typescript implicity populates class properties with these values.
	//no need to define them or assign them.
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
	{}

}