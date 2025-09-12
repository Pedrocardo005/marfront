import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { User } from "@core/models/User.model";
import { ErrorHandlerService } from "@core/services/error-handler.service";
import { UserService } from "@core/services/user.service";
import { TranslocoPipe } from "@jsverse/transloco";
import { SearchBarComponent } from "@shared/components/search-bar/search-bar.component";
import { RegexTextsService } from "@shared/services/regex-texts.service";
import { MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { RadioButtonModule } from "primeng/radiobutton";
import { Toast } from "primeng/toast";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
  imports: [
    ReactiveFormsModule,
    SearchBarComponent,
    TranslocoPipe,
    RouterLink,
    InputTextModule,
    FormsModule,
    PasswordModule,
    RadioButtonModule,
    ButtonModule,
    Toast,
  ],
  providers: [MessageService],
})
export class RegisterComponent {
  focus = false;
  focus1 = false;
  focus2 = false;
  emailValid = true;

  success = false;
  error = false;
  load = false;

  formEmail?: string;
  formPassword?: string;
  formConfirmPassword?: string;
  formUsername?: string;
  formLoginWith?: number;

  // Regex about passwords
  mediumRegex =
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9]))).{6,}$";
  strongRegex =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@!%*?&])[A-Za-z\\d$@!%*?&]{8,}$";

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private errorHandlerService: ErrorHandlerService,
    private regexTextsService: RegexTextsService,
  ) {}

  get samePassword(): boolean {
    return this.formPassword === this.formConfirmPassword;
  }

  getConfirmPasswordClasses() {
    if (!this.samePassword) {
      return "ng-invalid ng-dirty";
    }
    return "";
  }

  register() {
    const accountToSend: User = {
      email: this.formEmail,
      password: this.formPassword,
      username: this.formUsername,
      account_type: this.formLoginWith,
    };

    this.load = true;

    this.userService.register(accountToSend).subscribe({
      next: () => {
        this.messageService.add({
          severity: "success",
          summary: "Sucesso",
          detail: "Registro bem-sucedido!",
        });
        this.load = false;
      },
      error: (error: Error) => {
        const errorMessage = this.errorHandlerService.getErrorMessage(error);
        this.messageService.add({
          severity: "error",
          summary: "Erro",
          detail: `Erro ao registrar! ${errorMessage}`,
        });
        this.load = false;
        console.error("RegisterComponent.register(): ", error);
      },
    });
  }

  get validForm(): boolean {
    if (!this.formEmail || !this.regexTextsService.isEmail(this.formEmail)) {
      return false;
    }

    if (!this.formPassword || !this.formConfirmPassword) {
      return false;
    }

    if (!this.samePassword) {
      return false;
    }

    if (!this.formUsername) {
      return false;
    }

    if (!this.formLoginWith) {
      return false;
    }

    return true;
  }
}
