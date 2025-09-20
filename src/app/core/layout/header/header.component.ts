import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AuthService } from "@core/services/auth.service";
import { TranslocoModule } from "@jsverse/transloco";
import { MenuItem } from "primeng/api";
import { InputTextModule } from "primeng/inputtext";
import { Menu } from "primeng/menu";
import { MenubarModule } from "primeng/menubar";
import { RippleModule } from "primeng/ripple";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  imports: [
    MenubarModule,
    InputTextModule,
    TranslocoModule,
    Menu,
    RippleModule,
    RouterLink,
  ],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  isLogged = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const offlineItems: MenuItem[] = [
      {
        items: [
          {
            label: "CORE.LAYOUT.HEADER.DISCONNECT.LOGIN",
            url: "login",
          },
          {
            label: "CORE.LAYOUT.HEADER.DISCONNECT.REGISTER",
            url: "register",
          },
        ],
      },
    ];

    const logedItems: MenuItem[] = [
      {
        items: [
          {
            label: "CORE.LAYOUT.HEADER.MY-ADDS",
            url: "mylist",
          },
        ],
      },
    ];

    this.authService.updateAuthenticated();

    this.authService.isAuthenticated().subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.items = logedItems;
      } else {
        this.items = offlineItems;
      }
    });
  }
}
