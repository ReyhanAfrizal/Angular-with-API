import { Component } from '@angular/core';

import { IDoc } from '../../../core/interfaces/i-doc';
import { catchError } from 'rxjs';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ImageService } from '../../../core/services/image.service';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-create',
  templateUrl: './image-create.component.html',
  styleUrl: './image-create.component.css',
})
export class ImageCreateComponent {
  doc?: IDoc;
  file: any;
  icons = {
    upload: faUpload,
  };

  constructor(private imageService: ImageService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.imageService
        .upload(this.file)
        .pipe(catchError(this.imageService.baseHttp.handleError))
        .subscribe((resp: IDoc) => {
          Swal.fire({
            title: 'Success',
            text: 'Upload Successfully',
            icon: 'success',
          });
          this.doc = resp;
          this.router.navigate(['/image']);
        });
    }
  }

  upload(event: any) {
    this.file = event.target.files[0];
  }
}
