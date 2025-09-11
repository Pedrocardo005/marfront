import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { TranslocoPipe } from "@jsverse/transloco";
import { SearchBarComponent } from "@shared/components/search-bar/search-bar.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  imports: [SearchBarComponent, RouterLink, TranslocoPipe],
})
export class LoginComponent {}
