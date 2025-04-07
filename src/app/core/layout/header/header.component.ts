import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [NgIf],
})
export class HeaderComponent {
  isAuth = false;
}
