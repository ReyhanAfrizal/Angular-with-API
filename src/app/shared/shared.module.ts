import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { MenuNavigationComponent } from './layouts/menu-navigation/menu-navigation.component';
import { MenuAppComponent } from './layouts/menu-app/menu-app.component';
import { MessageValidationComponent } from './components/message-validation/message-validation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    MenuNavigationComponent,
    MenuAppComponent,
    MessageValidationComponent,
  ],
  providers: [provideHttpClient()],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MenuNavigationComponent,
    MenuAppComponent,
    MessageValidationComponent,
  ],
})
export class SharedModule {}
