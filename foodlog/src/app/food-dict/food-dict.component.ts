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

  foodDialogRef: MatDialogRef<AddFoodDialogComponent>;


  // form displays when not submitted
  submitted = false;
  // default to having form open to add a new food
  editingExistingFood = false;

  servingUnits = ['ounces', 'grams', 'cups', 'tablespoons', 'teaspoons', 'container', 'N/A'];

  foodDict: Food[] = [];
  food: Food = new Food(1, 'test food', 100, 10, 5, 20, this.servingUnits[0], 1);

  constructor(private foodService: FoodService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.foodService.getFoodDict()
      .subscribe(data => this.foodDict = data);
  }

  onSelectFood(food: Food) {
    console.log('parent: selected food: ', food.name);
    this.food = food;
    this.editingExistingFood = true;
  }

  onSubmitFood(food: Food) {
    if (this.editingExistingFood) {
      console.log('parent: Submitted edits to food: ', food.name);
    } else {
      console.log('parent: Submitted new food: ', food.name);
    }
    // TODO: account for updating an existing food here
    this.foodService.addFoodtoDict(food);
    this.food = null;
    this.editingExistingFood = false;
  }

  openAddFoodDialog() {
    this.foodDialogRef = this.dialog.open(AddFoodDialogComponent);
  }

  populateTestFood() {
    this.food['id'] = 1;
    this.food['name'] = 'test food';
    this.food['calories'] = 100;
    this.food['fat'] = 10;
    this.food['carbs'] = 5;
    this.food['protein'] = 20;
    this.food['servingUnit'] = this.servingUnits[0];
    this.food['servingSize'] = 1;

    /* IMPORTANT NOTE:
    the below will not update references like [{ngModel)] = food.name
    we would need to bind to food itself for setting a whole new object to work;
    this is why we do it like above instead
    below is bad garbo:
    this.food = new Food(this.foodCount, 'test food', 100, 10, 5, 20, this.servingUnits[0], 1);*/
  }
}
