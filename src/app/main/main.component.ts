import {Component, OnInit} from '@angular/core';
import {CurrentUserService} from '../shared/services/current-user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  isAuthorised: boolean = false;

  constructor(private currentUserService: CurrentUserService) {
  }

  ngOnInit() {
    this.currentUserService
      .isAuthorised
      .subscribe((isAuth: boolean) => {
        this.isAuthorised = isAuth;
      })
    ;
  }

}
