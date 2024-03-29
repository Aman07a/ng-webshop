import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService, SignupCredentials } from 'src/app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  authForm = new FormGroup(
    {
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9]+$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    { validators: [this.matchPassword.validate] }
  );

  constructor(
    private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService,
    private router: Router
  ) {
    this.authForm
      .get('username')
      ?.setAsyncValidators(this.uniqueUsername.validate);
  }

  ngOnInit() {}

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    const { username, password, passwordConfirmation } = this.authForm.value;

    if (!username || !password || !passwordConfirmation) {
      return;
    }

    const credentials: SignupCredentials = {
      username,
      password,
      passwordConfirmation,
    };

    this.authService
      .signup(this.authForm.value as SignupCredentials)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/products');
        },
        error: (err) => {
          if (!err.status) {
            this.authForm.setErrors({ noConnection: true });
          } else {
            this.authForm.setErrors({ noConnection: true });
          }
        },
      });
  }
}
