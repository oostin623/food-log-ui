import { Component } from '@angular/core';

import { Food } from '../Food';

@Component({
  selector: 'app-food-dict',
  templateUrl: './food-dict.component.html',
  styleUrls: ['./food-dict.component.css']
})
export class FoodDictComponent {

	//Initialize empty  food dict array
	foodDict: Food[] = [];

	//possible serving units for the drop down
	servingUnits = ['ounces', 'grams', 'cups', 'tablespoons', 'teaspoons', 'container', 'N/A'];

	foodCount = 0;

  //oddly enough, the ngModel in the form is bound to this, but will only update the
  //display when it detects a change. still need a valid object here though.
	food: Food;
	submitted = false;
	showList = false;
	editingExistingFood = false;

	constructor() {
		this.resetFoodModel();
	}

	resetFoodModel() {
		this.food = new Food(this.foodCount, '', 0);
		this.editingExistingFood = false;
	}

	onSubmit() {		
	  //maintain the id if editing an existing food
		if (!this.editingExistingFood) { 
			this.food['id'] = this.foodCount;
			this.foodCount++;
			this.foodDict.push(this.food); 
		}
		this.submitted = true;
		this.showList = true;
		this.resetFoodModel();
	}

	clearFood() {
		this.resetFoodModel();
		this.submitted = false;
	}

	hideList() {
		this.showList = false;
	}

	setFoodToEdit(food: Food) {
		this.setFoodModel(food);
		this.editingExistingFood = true;
	}

	setFoodModel(food: Food) {
		this.food = food;
	}

	/** +++++++++++++++++++++++++++++++ TEST FUNCTIONS ++++++++++++++++++++++++ **/

	populateTestFood() {
		this.food['id'] = this.foodCount;
		this.food['name'] = 'test food';
		this.food['calories'] = 100;
		this.food['fat'] = 10;
		this.food['carbs'] = 5;
		this.food['protein'] = 20;
		this.food['servingUnit'] = this.servingUnits[0];
		this.food['servingSize'] = 1;

		/**IMPORTANT NOTE: 
		the below will not update references like [{ngModel)] = food.name
		we would need to bind to food itself for setting a whole new object to work;
		this is why we do it like above instead
		below is bad garbo:

		this.food = new Food(this.foodCount, 'test food', 100, 10, 5, 20, this.servingUnits[0], 1);
		**/
	}

	//added to confirm that ngModel will in fact update when the component changes a value
	// test results: it does in fact update.
	setTheCurrentFoodName() {
		this.food['name'] = 'testing reset of food name';
	}
}
