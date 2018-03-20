import {MenuItem} from './../../shared/objects/menu-item';
import {NavbarService} from './../../shared/services/navbar.service';
import {Component, OnInit} from '@angular/core';
import {CurrentUserService} from '../../shared/services/current-user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-navbar',
  templateUrl: './auth-navbar.component.html',
  styles: []
})
export class AuthNavbarComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(private currentUserService: CurrentUserService,
              private router: Router,
              private navbarService: NavbarService) {
  }

  ngOnInit() {
    this.navbarService
      .getMainNavbarService()
      .subscribe((menuItems: MenuItem[]) => {
        console.log('menuItems', menuItems);
        this.menuItems = menuItems;
      });
  }

  logout() {
    this.currentUserService.logout();
    this.router.navigate(['login']);
  }
}
