import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../shared/services/current-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-navbar',
  templateUrl: './auth-navbar.component.html',
  styles: []
})
export class AuthNavbarComponent implements OnInit {

  constructor(
    private currentUserService: CurrentUserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout(){
    this.currentUserService.logout();
    this.router.navigate(['login']);
  }
}
