
import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { tap } from 'rxjs/operators';
import { Food } from '../model/food';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FoodService {

  private foodDictUrl = 'api/foods';
  private foodDictSource: BehaviorSubject<Food[]> = new BehaviorSubject<Food[]>([]);
  private foodDict$: Observable<Food[]> = this.foodDictSource.asObservable();

  constructor(private http: HttpClient) {
    this.loadFoodDict();
  }

  private loadFoodDict() {
    this.http.get<Food[]>(this.foodDictUrl)
    .pipe(
      tap(data => console.log(data)),
    )
    .subscribe(
      data => this.foodDictSource.next(data));
  }

  public getFoodDict(): Observable<Food[]> {
    return this.foodDict$;
  }

  public addFoodtoDict(food: Food) {
    this.http.post<Food>(this.foodDictUrl, food, httpOptions)
    .subscribe(
      data => this.foodDictSource.next(this.foodDictSource.value.concat(data)));
  }
}
