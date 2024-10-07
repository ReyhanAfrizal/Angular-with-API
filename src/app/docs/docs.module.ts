import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DocComponent } from './pages/doc/doc.component';
import { DocListComponent } from './pages/doc-list/doc-list.component';
import { DocCreateComponent } from './pages/doc-create/doc-create.component';
import { DocDetailComponent } from './pages/doc-detail/doc-detail.component';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    DocComponent,
    DocListComponent,
    DocCreateComponent,
    DocDetailComponent,
  ],
  imports: [
    CommonModule,
    DocsRoutingModule,
    SharedModule,
    NgbPagination,
    FontAwesomeModule,
  ],
})
export class DocsModule {}
