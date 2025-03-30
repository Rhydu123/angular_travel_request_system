import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: EmployeeDashboardComponent }
];

@NgModule({
  declarations: [EmployeeDashboardComponent], // Declare the component
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // Use forChild() for feature modules
  ],
  exports: [RouterModule]
})
export class EmployeeModule { }

