import { Component, OnInit } from '@angular/core';
import { Food } from '../model/food';
import { FoodService } from '../services/food.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddFoodDialogComponent } from '../food-dict/add-food-dialog/add-food-dialog.component';

@Component({
  selector: 'app-food-dict',
  templateUrl: './food-dict.component.html',
  styleUrls: ['./food-dict.component.css']
})
export class FoodDictComponent implements OnInit {

  servingUnits = ['ounces', 'grams', 'cups', 'tablespoons', 'teaspoons', 'container', 'N/A'];

  submitted = false;
  editingExistingFood = false;

  foodDialogRef: MatDialogRef<AddFoodDialogComponent>;

  foodDict: Food[] = [];
  food: Food = new Food(10, 'apple', 100, 20, 5, 10, '10 oz');

  constructor(private foodService: FoodService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.foodService.getFoodDict()
    .subscribe(data => this.foodDict = data);
  }
  
  openAddFoodDialog() {
    this.foodDialogRef = this.dialog.open(AddFoodDialogComponent);
  }

  onSubmit() {
    // maintain the id if editing an existing food
    this.foodService.addFoodtoDict(this.food);
    this.submitted = true;
  }

  setFoodToEdit(food: Food) {
    this.setFoodModel(food);
    this.editingExistingFood = true;
  }

  setFoodModel(food: Food) {
    this.food = food;
  }

  populateTestFood() {
    // this.food = new Food(10, 'apple', 100, 20, 5, 10, '10 oz');
    this.food['id'] = 1;
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
}
