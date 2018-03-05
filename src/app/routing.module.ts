import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { GuestGuard } from './shared/guards/guest-guard.service';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/** Common configuration */
const appRoutes = [
    {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard],
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
        path: '404',
        component: PageNotFoundComponent
    },

    // todo: implement latter
    // {
    //     path: '**',
    //     redirectTo: '/404'
    // }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule {
}
