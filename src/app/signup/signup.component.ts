import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.signupForm = this.formBuilder.group({
          name: ['', [Validators.required]],
          userName: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', [Validators.required]]
      });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.signupForm.controls;
  }

  passwordConfirming() {
    // tslint:disable-next-line:max-line-length
    if (this.signupForm.controls.password.value !== this.signupForm.controls.confirmPassword.value && this.signupForm.controls.confirmPassword.value !== '') {
        return false;
    }
    return true;
}

  doSignUp() {
    this.submitted = true;
    if (this.signupForm.invalid || !this.passwordConfirming()) {
      return;
    }
    alert('Register Successfully');
  }

}
