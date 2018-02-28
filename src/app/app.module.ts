import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { MainComponent } from './main/main.component';
import {RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { GuestNavbarComponent } from './navbars/guest-navbar/guest-navbar.component';
import { AuthNavbarComponent } from './navbars/auth-navbar/auth-navbar.component';


const rootRouting: ModuleWithProviders = RouterModule.forRoot([
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', component: PageNotFoundComponent }
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
    BrowserModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
