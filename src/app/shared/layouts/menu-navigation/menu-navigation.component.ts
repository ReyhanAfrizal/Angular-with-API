import { Component } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-navigation',
  templateUrl: './menu-navigation.component.html',
  styleUrl: './menu-navigation.component.css',
})
export class MenuNavigationComponent {
  icons = {
    stack: faIgloo,
  };
  constructor(private authService: AuthenticationService) {}

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
