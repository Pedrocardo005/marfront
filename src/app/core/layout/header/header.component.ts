import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { Menu } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
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

  ngOnInit(): void {
    this.items = [
      {
        items: [
          {
            label: 'CORE.LAYOUT.HEADER.DISCONNECT.LOGIN',
          },
          {
            label: 'CORE.LAYOUT.HEADER.DISCONNECT.REGISTER',
          },
        ],
      },
    ];
  }
}
