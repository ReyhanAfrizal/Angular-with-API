import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RightComponent } from './pages/right/right.component';
import { UserComponent } from './pages/user/user.component';


@NgModule({
  declarations: [
    DashboardComponent,
    RightComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
