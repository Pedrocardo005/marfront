import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { Router, RouterLink } from '@angular/router';
import { SearchBarComponent } from "@shared/components/search-bar/search-bar.component";
import { TranslocoPipe } from '@jsverse/transloco';
import { InputTextModule } from 'primeng/inputtext';

interface RegisterForm {
  username?: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [ReactiveFormsModule, SearchBarComponent, TranslocoPipe, RouterLink, InputTextModule, FormsModule]
})
export class RegisterComponent {
  focus = false;
  focus1 = false;
  focus2 = false;
  emailValid = true;

  success = false;
  error = false;

  formEmail: string | undefined;

  constructor(
    private readonly userService: UserService,
    private route: Router
  ) {
  }

  // Função criada para saber se o valor é válido, usar para contruir o formulário
  isValidEmail() {
    const control = new FormControl(this.formEmail, Validators.email)
    console.log('O que tem no erros', control.errors);

    console.log('O que tem no valid', control.valid);
    return '';
  }
}
