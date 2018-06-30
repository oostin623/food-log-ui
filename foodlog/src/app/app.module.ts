import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { LogFormComponent } from './log-form/log-form.component';
import  { LogService } from './log.service';
import { FoodDictComponent } from './food-dict/food-dict.component';


@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    LogFormComponent,
    FoodDictComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
