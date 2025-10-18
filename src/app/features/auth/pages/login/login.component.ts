import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { User } from "@core/models/User.model";
import { AuthService } from "@core/services/auth.service";
import { ErrorHandlerService } from "@core/services/error-handler.service";
import { TokenService } from "@core/services/token.service";
import { UserService } from "@core/services/user.service";
import { TranslocoPipe } from "@jsverse/transloco";
import { SearchBarComponent } from "@shared/components/search-bar/search-bar.component";
import { MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { Toast } from "primeng/toast";

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
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router,
  ) { }

  isValidForm(): boolean {
    return this.formUsername.length > 0 && this.formPassword.length >= 8;
  }

  login() {
    const user: User = {
      username: this.formUsername,
      password: this.formPassword,
    };
    this.loading = true;
    this.authService.login(user).subscribe({
      next: () => {
        this.loading = false;

        this.messageService.add({
          severity: "success",
          summary: "Sucesso",
          detail: "Login efetuado com sucesso",
        });

        this.formUsername = "";
        this.formPassword = "";

        setTimeout(() => {
          this.router.navigate(["mylist"]);
        }, 4000);
      },
      error: (error: Error) => {
        this.messageService.add({
          severity: "error",
          summary: "Erro",
          detail: `Erro ao efetuar login! ${error.message}`,
        });
        this.loading = false;
        console.error("LoginComponent.login(): ", error);
      },
    });
  }

  enterLogin() {
    if (this.isValidForm()) {
      this.login();
    }
  }
}
