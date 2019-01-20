import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from '../../model/food';

@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.css']
})
export class FoodTableComponent {

  @Input() foodDict: Food[];
  @Output() food = new EventEmitter<Food>();

  private onSelect(food: Food) {
    console.log('( food table ) - food selected: ', food.name);
    this.food.emit(food);
  }
}
