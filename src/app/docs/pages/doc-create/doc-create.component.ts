import { Component } from '@angular/core';
import { DocService } from '../../../core/services/doc.service';
import { IDoc } from '../../../core/interfaces/i-doc';
import { catchError } from 'rxjs';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-doc-create',
  templateUrl: './doc-create.component.html',
  styleUrl: './doc-create.component.css',
})
export class DocCreateComponent {
  doc?: IDoc;
  file: any;

  icons = {
    upload: faUpload,
  };

  constructor(private docService: DocService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.docService
        .upload(this.file)
        .pipe(catchError(this.docService.baseHttp.handleError))
        .subscribe((resp: IDoc) => {
          Swal.fire({
            title: 'Success',
            text: 'Upload Successfully',
            icon: 'success',
          });
          this.doc = resp;
          this.router.navigate(['/doc']);
        });
    }
  }

  upload(event: any) {
    this.file = event.target.files[0];
  }
}
