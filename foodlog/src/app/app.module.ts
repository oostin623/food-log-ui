import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//basic persistence for the service
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data-service';

import { AppComponent } from './app.component';
import { LogFormComponent } from './log-form/log-form.component';

import  { LogDayService } from './logDay.service';
import  { FoodService } from './food.service';

import { FoodDictComponent } from './food-dict/food-dict.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FoodDetailsPipe } from './food-details.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LogFormComponent,
    FoodDictComponent,
    DashboardComponent,
    FoodDetailsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [LogDayService, FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
