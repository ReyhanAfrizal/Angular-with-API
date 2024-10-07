import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { IDoc } from '../../../core/interfaces/i-doc';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ImageService } from '../../../core/services/image.service';

import { faUpload, faRemove } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrl: './image-detail.component.css',
})
export class ImageDetailComponent {
  icons = {
    upload: faUpload,
    remove: faRemove,
  };
  doc!: IDoc;
  file: any;
  id: number = 0;

  constructor(
    private imageService: ImageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '0');

    this.imageService
      .getDoc(this.id)
      .pipe(catchError(this.imageService.baseHttp.handleError))
      .subscribe((resp: IDoc) => {
        this.doc = resp;
      });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.imageService
        .updateDoc(this.id, this.file)
        .pipe(catchError(this.imageService.baseHttp.handleError))
        .subscribe((resp: IDoc) => {
          Swal.fire({
            title: 'Success',
            text: 'Edit successfully!',
            icon: 'success',
          });

          this.doc = resp;
          this.router.navigate(['/image']);
        });
    }
  }

  onRemove() {
    Swal.fire({
      title: 'Do you want to delete this image?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.imageService
          .removeDoc(this.id)
          .pipe(catchError(this.imageService.baseHttp.handleError))
          .subscribe((resp: null) => {
            Swal.fire({
              title: 'Success',
              text: 'Remove Successed',
            });
            this.router.navigate(['/image']);
          });
      } else if (result.isDenied) {
      }
    });
  }

  upload(event: any) {
    this.file = event.target.files[0];
  }
}
