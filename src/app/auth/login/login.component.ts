import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiCommunicationService } from '../../shared/api-services/api-communication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiCommunicationService: ApiCommunicationService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      login: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(128)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(128)
      ]]
    });
  }

  submit() {
    this.apiCommunicationService
      .login(this.loginForm.value.login, this.loginForm.value.password)
      .subscribe((data: any) => {
        console.log(data);
      })
      ;
  }
}
