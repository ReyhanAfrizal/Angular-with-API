import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuardService } from '../core/services/guard.service';
import { ImageListComponent } from './pages/image-list/image-list.component';
import { ImageCreateComponent } from './pages/image-create/image-create.component';
import { ImageDetailComponent } from './pages/image-detail/image-detail.component';

const routes: Routes = [
  { path: 'image', component: ImageListComponent, canActivate: [GuardService] },
  {
    path: 'image/new',
    component: ImageCreateComponent,
    canActivate: [GuardService],
  },
  {
    path: 'image/detail/:id',
    component: ImageDetailComponent,
    canActivate: [GuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagesRoutingModule {}
