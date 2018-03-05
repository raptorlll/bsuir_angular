import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiCommunicationService } from '../../shared/api-services/api-communication.service';
import { userRolesList } from '../../shared/predefined-lists';
import { Role, User } from '../../shared/models';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
  userRolesList: Role[];
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiCommunicationService: ApiCommunicationService
  ) {
    this.userRolesList = userRolesList;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(128)
      ]],
      firstName: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(128)
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(128)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(128)
      ]],
      username: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(128)
      ]],
      roles: ['', [
        Validators.required
      ]],
    });
  }

  submit() {
    this.apiCommunicationService
      .registration(this.convertFormToModel())
      .subscribe((data: any) => {
        this.router.navigate(['login']);
      });
  }

  convertFormToModel(): User{
    const user = new User();

    user.email = this.loginForm.value.email;
    user.firstName = this.loginForm.value.firstName;
    user.lastName = this.loginForm.value.lastName;
    user.password = this.loginForm.value.password;
    user.roles = [_.find(userRolesList, {roleName: this.loginForm.value.roles})];
    user.username = this.loginForm.value.username;

    return user;
  }

}
