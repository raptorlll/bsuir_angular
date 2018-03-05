import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CurrentUserService } from '../services/current-user.service';

@Injectable()
export class GuestGuard implements CanActivate {
    constructor(private router: Router,
        private currentUserService: CurrentUserService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.currentUserService.isAuthorised
            .do((isAuth)=>{
                if (isAuth) {
                    this.router.navigate(['/']);
                }
            })
            .map(a=>!a);
    }
}
