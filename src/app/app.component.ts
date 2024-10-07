import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-angular';

  ngOnInit(): void {
    Swal.fire({
      icon: 'success',
      title: 'Web Fully Loaded',
    });
  }
}
