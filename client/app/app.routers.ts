import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './_common/layout/home/home.component';
import { AboutComponent } from './_common/layout/about/about.component';

import { EmployeeComponent } from './hrm/components/employee.component';
import { EmployeeViewComponent } from './hrm/components/employee-view.component';

//all routers
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
  { path: 'employee', component: EmployeeComponent }
  { path: 'employee-view', component: EmployeeViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
