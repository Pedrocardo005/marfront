import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-back-top',
    templateUrl: './back-top.component.html',
    styleUrls: ['./back-top.component.scss'],
    animations: [
        trigger('fadeInOut', [
            state('true', style({ opacity: 1, visibility: 'visible' })),
            state('false', style({ opacity: 0, visibility: 'hidden' })),
            transition('true <=> false', animate('300ms ease-in-out')),
        ]),
    ],
    standalone: false
})
export class BackTopComponent {
  isVisible = false;

  constructor() {}

  @HostListener('window:scroll')
  onScroll() {
    const scrollY = window.scrollY;

    this.isVisible = scrollY > 720;
  }

  onClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
