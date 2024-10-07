import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { ImageCreateComponent } from './pages/image-create/image-create.component';
import { ImageDetailComponent } from './pages/image-detail/image-detail.component';
import { ImageListComponent } from './pages/image-list/image-list.component';
import { SharedModule } from '../shared/shared.module';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ImageCreateComponent,
    ImageDetailComponent,
    ImageListComponent,
  ],
  imports: [
    CommonModule,
    ImagesRoutingModule,
    SharedModule,
    NgbPagination,
    FontAwesomeModule,
  ],
})
export class ImagesModule {}
