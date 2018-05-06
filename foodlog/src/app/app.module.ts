import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { LogFormComponent } from './log-form/log-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    LogFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
