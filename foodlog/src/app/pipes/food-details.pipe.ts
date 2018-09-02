import { Pipe, PipeTransform } from '@angular/core';
import { Food } from '../model/food';

@Pipe({
  name: 'foodDetails'
})
export class FoodDetailsPipe implements PipeTransform {

  transform(food: Food, args?: Array<String>): string {
    if (args != null && args.indexOf('labels') > -1) {
            return 'id: ' + food.id
      + ' name: ' + food.name
      + ' calories: ' + food.calories
      + ' fat: ' + food.fat
      + ' carbs: ' + food.carbs
      + ' protein: ' + food.protein
      + ' servingSize: ' + food.servingSize + ' ' + food.servingUnit;
    } else {
      return food.id
      + ' ' + food.name
      + ' ' + food.calories
      + ' ' + food.fat
      + ' ' + food.carbs
      + ' ' + food.protein;
    }
  }

}
