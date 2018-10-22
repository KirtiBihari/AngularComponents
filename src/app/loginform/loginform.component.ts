import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})

export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }


  doLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
  }
  console.log('Logged In' + this.loginForm.controls.email.value);
  console.log('Logged In' + this.loginForm.controls.password.value);
    console.log('Logged In');
  }
  goToSignUp() {

  }
}
