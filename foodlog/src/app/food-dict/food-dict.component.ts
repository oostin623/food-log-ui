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

  submitted = false;

  // true => call update(), else => call add()
  editingExistingFood = false;

  servingUnits = ['ounces', 'grams', 'cups', 'tablespoons', 'teaspoons', 'container', 'N/A'];

  foodDict: Food[] = [];
  food: Food;

  constructor(private foodService: FoodService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.foodService.getFoodDict()
      .subscribe(data => this.foodDict = data);
  }

  onSelectFood(food: Food) {
    console.log('food-dict: selected food: ', food.name);
    this.food = food;
    this.editingExistingFood = true;
  }

  onSubmitFood(food: Food) {
    if (this.editingExistingFood) {
      console.log('food-dict: Submitted edits to food: ', food.name);
      this.foodService.editExistingFood(food);
      this.editingExistingFood = false;
    } else {
      console.log('food-dict: Submitted new food: ', food.name);
      this.foodService.addFoodToDict(food);
    }
    this.food = new Food();
  }

  openAddFoodDialog() {
    this.foodDialogRef = this.dialog.open(AddFoodDialogComponent);
  }

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
