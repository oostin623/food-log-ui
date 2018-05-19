import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { LogFormComponent } from './log-form/log-form.component';
import  { LogService } from './log.service';


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
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
