import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { RightComponent } from './pages/right/right.component';
import { GuardService } from '../core/services/guard.service';

const routes: Routes = [
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [GuardService],
    children: [
      { path: 'user', component: UserComponent },
      { path: 'right', component: RightComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
