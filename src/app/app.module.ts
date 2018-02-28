import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { GuestNavbarComponent } from './navbars/guest-navbar/guest-navbar.component';
import { AuthNavbarComponent } from './navbars/auth-navbar/auth-navbar.component';
import { SharedModule } from './shared/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GuestGuard } from './shared/guards/guest-guard.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    canActivate: [GuestGuard],
    component: LoginComponent
  },
  {
    path: 'registration',
    canActivate: [GuestGuard],
    component: RegistrationComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]);

@NgModule({
  declarations: [
    MainComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegistrationComponent,

    /* Navigation bar parts */
    GuestNavbarComponent,
    AuthNavbarComponent
  ],
  imports: [
    rootRouting,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
