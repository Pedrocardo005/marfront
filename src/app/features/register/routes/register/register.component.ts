import { NgClass, NgIf } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
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
  imports: [ReactiveFormsModule, NgClass, NgIf],
  standalone: true,
})
export class RegisterComponent {
  focus: boolean = false;
  focus1: boolean = false;
  focus2: boolean = false;

  registerForm: FormGroup<RegisterForm>;

  destroyRef = inject(DestroyRef);

  success: boolean = false;
  error: boolean = false;

  constructor(
    private readonly userService: UserService,
    private route: Router
  ) {
    this.registerForm = new FormGroup<RegisterForm>({
      email: new FormControl('', {
        validators: [Validators.required],
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
    const self = this;
    let observable = this.userService.register(
      this.registerForm.value as {
        email: string;
        username?: string;
        password: string;
      }
    );

    observable.pipe().subscribe({
      next() {
        self.success = true;
        self.registerForm.reset();
        setTimeout(() => {
          self.route.navigate(['/login']);
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
