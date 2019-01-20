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
/**
 * Food Dict
 */
export class FoodDictComponent implements OnInit {

  addFoodDialogRef: MatDialogRef<AddFoodDialogComponent>;
  submitted = false;
  edit = false; // true when form is in "edit mode"
  servingUnits = ['ounces', 'grams', 'cups', 'tablespoons', 'teaspoons', 'container', 'N/A'];
  foodDict: Food[] = [];
  food: Food;

  /* wire required bits */
  constructor(private foodService: FoodService,
              private dialog: MatDialog) {}

  /* initialize component */
  ngOnInit() {
    this.foodService.getFoodDict()
      .subscribe(data => this.foodDict = data);
  }

  /* ::: USER ACTIONS ::: */

  /* food selected for view/edit */
  onSelectFood(food: Food) {
    console.log('food-dict: selected food: ', food.name);
    this.food = food;
    this.edit = true;
  }

  /* food entry added or changed */
  onSubmitFood(food: Food) {
    console.log( this.edit ? 'food-dict: Submitted edits to food: ' : 'food-dict: Submitted new food: ', food.name);
    if (this.edit) {
      this.foodService.editFood(food);
      this.edit = false;
    } else {
      this.foodService.addFood(food);
    }
    this.food = new Food();
  }

  /* add new food dialog */
  openAddFoodDialog() {
    this.addFoodDialogRef = this.dialog.open(AddFoodDialogComponent);
  }

  // TODO remove when done testing
  populateTestFood() {
    this.food = new Food();
    this.food['id'] = 1;
    this.food['name'] = 'test food';
    this.food['calories'] = 100;
    this.food['fat'] = 10;
    this.food['carbs'] = 5;
    this.food['protein'] = 20;
    this.food['servingUnit'] = this.servingUnits[0];
    this.food['servingSize'] = 1;
  }
}
