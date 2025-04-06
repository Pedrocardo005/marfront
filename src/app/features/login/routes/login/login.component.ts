import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [NgClass, ReactiveFormsModule, NgIf, RouterLink]
})
export class LoginComponent {
  focus: boolean = false;
  focus1: boolean = false;

  loginForm: FormGroup<LoginForm>;

  success: boolean = false;
  error: boolean = false;

  constructor(private readonly userService: UserService) {
    this.loginForm = new FormGroup<LoginForm>({
      email: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      password: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });
  }

  submitForm() {
    const self = this;
    let observable = this.userService.login(
      this.loginForm.value as {
        email: string;
        password: string;
      }
    );

    observable.pipe().subscribe({
      next() {
        self.success = true;
        setTimeout(() => {
          self.success = false;
        }, 3000);
      },
      error() {
        self.error = true;
        setTimeout(() => {
          self.error = false;
        }, 3000);
      },
    });
  }
}
