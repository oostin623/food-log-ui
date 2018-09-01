import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { Food } from '../Food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-dict',
  templateUrl: './food-dict.component.html',
  styleUrls: ['./food-dict.component.css']
})
export class FoodDictComponent {
	foodDict: Food[] = [];

	//possible serving units for the drop down
	servingUnits = ['ounces', 'grams', 'cups', 'tablespoons', 'teaspoons', 'container', 'N/A'];

	food: Food;
	submitted = false;
	showList = false;
	editingExistingFood = false;

  constructor(private foodService: FoodService) {
	  this.resetFoodModel();
  }

  ngOnInit() { 
    this.getFoodDict();
  }

  getFoodDict(): void {
    this.foodService.getFoodDict()
      .subscribe(foodDict => this.foodDict = foodDict);
  }

	resetFoodModel() {
		this.food = new Food(null, '', 0);
		this.editingExistingFood = false;
	}

	onSubmit() {		
	  //maintain the id if editing an existing food
	  this.foodService.addFood(this.food)
      .subscribe(food => {
        this.foodDict.push(food);
      });
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
		this.food['id'] = null;
		this.food['name'] = 'test food';
		this.food['calories'] = 100;
		this.food['fat'] = 10;
		this.food['carbs'] = 5;
		this.food['protein'] = 20;
		this.food['servingUnit'] = this.servingUnits[0];
		this.food['servingSize'] = '1';

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
