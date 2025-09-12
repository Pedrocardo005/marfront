import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { TranslocoPipe } from "@jsverse/transloco";
import { SearchBarComponent } from "@shared/components/search-bar/search-bar.component";
import { RegexTextsService } from "@shared/services/regex-texts.service";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";

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
  ],
})
export class LoginComponent {
  formEmail = "";
  formPassword = "";

  loading = false;

  constructor(private regexTextsService: RegexTextsService) {}

  isValidForm(): boolean {
    return (
      this.regexTextsService.isEmail(this.formEmail) &&
      this.formPassword.length >= 8
    );
  }
}
