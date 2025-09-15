import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { User } from "@core/models/User.model";
import { UserService } from "@core/services/user.service";
import { TranslocoPipe } from "@jsverse/transloco";
import { SearchBarComponent } from "@shared/components/search-bar/search-bar.component";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { TokenService } from "@core/services/token.service";
import { Toast } from "primeng/toast";
import { MessageService } from "primeng/api";
import { ErrorHandlerService } from "@core/services/error-handler.service";
import { AuthService } from "@core/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  imports: [
    SearchBarComponent,
    RouterLink,
    TranslocoPipe,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    Toast,
  ],
  providers: [MessageService],
})
export class LoginComponent {
  formUsername = "";
  formPassword = "";

  loading = false;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private tokenService: TokenService,
    private messageService: MessageService,
    private errorHandlerService: ErrorHandlerService,
    private router: Router,
  ) {}

  isValidForm(): boolean {
    return this.formUsername.length > 0 && this.formPassword.length >= 8;
  }

  login() {
    const user: User = {
      username: this.formUsername,
      password: this.formPassword,
    };
    this.loading = true;
    this.userService.login(user).subscribe({
      next: (response) => {
        this.loading = false;
        this.tokenService.saveToken(response.token);

        this.messageService.add({
          severity: "success",
          summary: "Sucesso",
          detail: "Login efetuado com sucesso",
        });

        this.authService.setAuthenticated(true);

        this.formUsername = "";
        this.formPassword = "";

        setTimeout(() => {
          this.router.navigate(["/"]);
        }, 4000);
      },
      error: (error: Error) => {
        const errorMessage = this.errorHandlerService.getErrorMessage(error);
        this.messageService.add({
          severity: "error",
          summary: "Erro",
          detail: `Erro ao efetuar login! ${errorMessage}`,
        });
        this.loading = false;
        console.error("LoginComponent.login(): ", error);
      },
    });
  }
}
