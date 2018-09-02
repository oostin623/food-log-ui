import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from '../../model/food';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent {

  servingUnits = ['ounces', 'grams', 'cups', 'tablespoons', 'teaspoons', 'container', 'N/A'];

  @Input() editableFood: Food;
  @Output() food = new EventEmitter<Food>();

  private updateEditableFood(food: Food) {
    console.log('child: selected food: ', food.name);
    this.food.emit(food);
  }

  onSubmit() {
    this.updateEditableFood(this.editableFood);
  }
}
