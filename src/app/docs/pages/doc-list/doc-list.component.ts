import { Component, OnInit } from '@angular/core';
import { DocService } from '../../../core/services/doc.service';
import { catchError } from 'rxjs';
import { IPagination } from '../../../core/interfaces/i-pagination';
import { IDoc } from '../../../core/interfaces/i-doc';
import {
  faAdd,
  faDownload,
  faEdit,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrl: './doc-list.component.css',
})
export class DocListComponent implements OnInit {
  icons = {
    file: faFolderOpen,
    add: faAdd,
    download: faDownload,
    edit: faEdit,
  };
  docs: IPagination<IDoc> = { results: [], next: 0, previous: 0, count: 0 };
  page: number = 1;

  constructor(private docService: DocService) {}

  ngOnInit(): void {
    this.loadDocs();
  }

  loadDocs(): void {
    this.docService
      .getDocs(this.page)
      .pipe(
        catchError((error) => {
          console.error('Error fetching docs:', error);
          return [];
        })
      )
      .subscribe((resp: IPagination<IDoc>) => {
        this.docs = resp;
      });
  }

  onPaginateCustomer(page: number): void {
    this.page = page;
    this.loadDocs();
  }
}
