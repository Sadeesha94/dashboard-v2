import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  accountValidationMessages = {
    username: [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters' },
      { type: 'validUsername', message: 'Your username has already been taken' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    confirm_password: [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 6 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    terms: [
      { type: 'pattern', message: 'You must accept terms and conditions' }
    ]
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  // getError(el) {
  //   switch (el) {
  //     case 'user':
  //       if (this.loginForm.get('username').hasError('required')) {
  //         return 'Username required';
  //       }
  //       break;
  //     case 'pass':
  //       // if (this.loginForm.get('password').hasError('required')) {
  //       //   return 'Password required';
  //       // }
  //       if (this.loginForm.get('password').hasError('minLength')) {
  //         return 'Password should contain at least 6 characters';
  //       }
  //       break;
  //     default:
  //       return '';
  //   }
  // }

  onSubmit() {
    console.log(this.loginForm.value);
  }

}
