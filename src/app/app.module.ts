import { RoutingModule } from './routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { GuestNavbarComponent } from './navbars/guest-navbar/guest-navbar.component';
import { AuthNavbarComponent } from './navbars/auth-navbar/auth-navbar.component';
import { SharedModule } from './shared/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/Rx';
import { HomeComponent } from './home/home.component';
import { TokenInterceptor } from './shared/interceptor/token-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConsultantModule } from './consultant/consultant.module';
import { PreloaderComponent } from './shared/components/general/preloader.component';
import { NotificationComponent } from './shared/components/general/notification.component';
import { ReportsModule } from './reports/reports.module';

@NgModule({
  declarations: [
    MainComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegistrationComponent,

    /* Navigation bar parts */
    GuestNavbarComponent,
    AuthNavbarComponent,
    HomeComponent,
    PreloaderComponent,
    NotificationComponent,

  ],
  imports: [
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ConsultantModule,
    ReportsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [MainComponent],
})
export class AppModule {
}
