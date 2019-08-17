import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// basic persistence for the service
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data-service';

// ng material
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';


// food-log features
import { AppComponent } from './app.component';
import { LogFormComponent } from './log-form/log-form.component';
import { LogDayService } from './services/logDay.service';
import { FoodService } from './services/food.service';
import { FoodDictComponent } from './food-dict/food-dict.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { FoodDetailsPipe } from './pipes/food-details.pipe';
import { AddFoodDialogComponent } from './food-dict/add-food-dialog/add-food-dialog.component';
import { FoodTableComponent } from './food-dict/food-table/food-table.component';
import { FoodFormComponent } from './food-dict/food-form/food-form.component';
import { EditFoodDialogComponent } from './food-dict/edit-food-dialog/edit-food-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LogFormComponent,
    FoodDictComponent,
    FoodDetailsPipe,
    AddFoodDialogComponent,
    FoodTableComponent,
    FoodFormComponent,
    EditFoodDialogComponent
  ],
  imports: [
    // BrowserModule must import before Material stuff
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    BrowserAnimationsModule,
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
  bootstrap: [AppComponent],
  // dynamically generated dialogs, etc. from angular material
  entryComponents: [
    AddFoodDialogComponent,
    EditFoodDialogComponent
  ],
})
export class AppModule { }
