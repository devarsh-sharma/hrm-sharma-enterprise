import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../shared/material.module';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { LeaveComponent } from './leave/leave.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { SecurityComponent } from './security/security.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LayoutComponent,
    HomeComponent,
    EmployeesComponent,
    LeaveComponent,
    OrgChartComponent,
    SecurityComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
