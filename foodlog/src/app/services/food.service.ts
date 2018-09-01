
import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Food } from '../model/Food';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FoodService {

  private foodDictUrl = 'api/foods';  // URL to web api
 
  constructor(private http: HttpClient) { }

  /** GET foodDict from server */
  getFoodDict(): Observable<Food[]> {
    return this.http.get<Food[]>(this.foodDictUrl);
  }

  /** POST new Food to the server */
  addFood(food: Food): Observable<Food> {
    return this.http.post<Food>(this.foodDictUrl, food, httpOptions);
  }

}