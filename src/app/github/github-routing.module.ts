import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoListComponent } from './pages/repo-list/repo-list.component';
import { GuardService } from '../core/services/guard.service';

const routes: Routes = [
  { path: 'github', component: RepoListComponent, canActivate: [GuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubRoutingModule {}
