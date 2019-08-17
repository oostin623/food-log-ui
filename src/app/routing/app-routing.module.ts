import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogFormComponent } from '../log-form/log-form.component';
import { FoodDictComponent } from '../food-dict/food-dict.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
   // default route = redirect to dash
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // main dashboard
  { path: 'dashboard', component: DashboardComponent },
  { path: 'food-log', component: LogFormComponent },
  { path: 'food-dict', component: FoodDictComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
