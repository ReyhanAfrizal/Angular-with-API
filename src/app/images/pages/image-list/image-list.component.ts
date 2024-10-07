import { Component, OnInit } from '@angular/core';

import { catchError } from 'rxjs';
import { IPagination } from '../../../core/interfaces/i-pagination';
import { IDoc } from '../../../core/interfaces/i-doc';
import { ImageService } from '../../../core/services/image.service';
import {
  faAdd,
  faDownload,
  faEdit,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrl: './image-list.component.css',
})
export class ImageListComponent {
  icons = {
    file: faFolderOpen,
    add: faAdd,
    download: faDownload,
    edit: faEdit,
  };
  docs: IPagination<IDoc> = { results: [], next: 0, previous: 0, count: 0 };
  page: number = 1;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.loadDocs();
  }

  loadDocs(): void {
    this.imageService
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
