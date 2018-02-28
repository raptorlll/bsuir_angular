import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CurrentUserService } from '../services/current-user.service';

@Injectable()
export class GuestGuard implements CanActivate {
    constructor(private router: Router,
        private currentUserService: CurrentUserService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.currentUserService.isAuthorised) {
            this.router.navigate(['/']);
        }

        return !this.currentUserService.isAuthorised;
    }
}
