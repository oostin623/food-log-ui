
import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { tap } from 'rxjs/operators';
import { Food } from '../model/food';

/* HTTP request headers */
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
/* Food dict url */
const foodDictUrl = 'api/foods';


@Injectable()
/**
 * The Food Service.
 * Handles HTTP requests to back end
 * Handles state-management of the food dictionary
  */
export class FoodService {

  // FIXME: should this be initialized with the populated food dict instead of an empty array?
  private foodDictSource: BehaviorSubject<Food[]> = new BehaviorSubject<Food[]>([]);
  private foodDict$: Observable<Food[]> = this.foodDictSource.asObservable();

  constructor(private http: HttpClient) {
    this.loadFoodDict();
  }

  /* Initialize the food dict */
  private loadFoodDict() {
    this.http.get<Food[]>(foodDictUrl)
    .pipe(tap(data => console.log('( food service ) ::: INIT ::: - loaded food dict: ', data)), )
    .subscribe(data => this.foodDictSource.next(data));
  }

  /* subscribe to the food dict */
  public getFoodDict(): Observable<Food[]> {
    return this.foodDict$;
  }

  /* add new food */
  public addFood(food: Food) {
    this.http.post<Food>(foodDictUrl, food, httpOptions)
    .pipe(
      tap(data => console.log('( food service ) - added food: ', food, 'response: ', data)),
    )
    .subscribe(
      data => this.foodDictSource.next(this.foodDictSource.value.concat(data)));
  }

  /* edit existing food */
  public editFood(food: Food) {
    this.http.put<Food>(foodDictUrl, food, httpOptions)
      .pipe(
        tap(data => console.log('( food service ) - updated food: ', food, 'response: ', data)),
      )
      .subscribe();
  }
}
