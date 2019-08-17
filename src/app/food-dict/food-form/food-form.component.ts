import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Food } from '../../model/food';

// FIXME split into edit-form and add-form
@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent implements OnInit {

  @Input() food?: Food;
  @Output() newFood = new EventEmitter<Food>();

  ngOnInit() {
    if ( !this.food ) {
      this.food = new Food();
    }
  }

  onSubmit(food: Food) {
    this.newFood.emit(food);
  }
}
