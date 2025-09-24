import { Component } from '@angular/core';
import { DefaultLoginLayout } from '../../components/default-login-layout/default-login-layout';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    DefaultLoginLayout,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm!: FormGroup;

  constructor(){
    this.loginForm = new FormGroup({
      //email: new FormControl("",[Validators.required], Validators.email),
      email: new FormControl<string>("", {nonNullable: true, validators: [Validators.required, Validators.email]}),
      password: new FormControl<string>("", {nonNullable: true, validators: [Validators.required, Validators.minLength(6)]})
    })
  }

}
