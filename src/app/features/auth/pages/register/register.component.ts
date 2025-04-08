import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

interface RegisterForm {
  username?: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    imports: [ReactiveFormsModule, NgClass, NgIf]
})
export class RegisterComponent {
  focus = false;
  focus1 = false;
  focus2 = false;
  emailValid = true;

  registerForm: FormGroup<RegisterForm>;

  success = false;
  error = false;

  constructor(
    private readonly userService: UserService,
    private route: Router
  ) {
    this.registerForm = new FormGroup<RegisterForm>({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        nonNullable: true,
      }),
      password: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      username: new FormControl(),
    });
  }

  submitForm() {
    if (this.registerForm.valid) {
      const observable = this.userService.register(
        this.registerForm.value as {
          email: string;
          username?: string;
          password: string;
        }
      );
  
      observable.pipe().subscribe({
        next: () => {
          this.success = true;
          this.registerForm.reset();
          setTimeout(() => {
            this.route.navigate(['/login']);
          }, 3000);
        },
        error: () => {
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 3000);
        },
      });
    }
  }

  get email() {
    return this.registerForm.get('email');
  }
}
