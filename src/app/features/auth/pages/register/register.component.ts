import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { TranslocoPipe } from "@jsverse/transloco";
import { SearchBarComponent } from "@shared/components/search-bar/search-bar.component";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { RadioButtonModule } from "primeng/radiobutton";

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
  ],
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
  formLoginWith?: string;

  // Regex about passwords
  mediumRegex =
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9]))).{6,}$";
  strongRegex =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@!%*?&])[A-Za-z\\d$@!%*?&]{8,}$";

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
    this.load = true;
    // Simulate an asynchronous operation
    setTimeout(() => {
      this.load = false;
      this.success = true;
    }, 2000);
  }
}
