import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Food } from '../../model/food';

// FIXME split into edit-form and add-form
@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent implements OnInit {

  @Input() food: Food;
  @Output() newFood = new EventEmitter<Food>();

  ngOnInit() {
  }
  
  getServingUnits(): string[] {
    return Food.servingUnits;
  }

  onSubmit(food: Food) {
    console.log(' ( food form ) - new/updated food: ', food.name);
    this.newFood.emit(food);
  }
}
