import { Component } from '@angular/core';
import { DefaultLoginLayout } from '../../components/default-login-layout/default-login-layout';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    DefaultLoginLayout,
    ReactiveFormsModule,
    PrimaryInput
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm!: FormGroup;

  constructor(
    private router: Router
  ){
    this.loginForm = new FormGroup({
      //email: new FormControl("",[Validators.required], Validators.email),
      email: new FormControl<string>("", {nonNullable: true, validators: [Validators.required, Validators.email]}),
      password: new FormControl<string>("", {nonNullable: true, validators: [Validators.required, Validators.minLength(6)]})
    })
  }

  submit(){
    console.log(this.loginForm.value);
  }

  navigate(){
    this.router.navigate(["signup"]);
  }

}
