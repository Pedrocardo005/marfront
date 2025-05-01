import { Directive, OnInit } from '@angular/core';

@Directive()
export abstract class HandleResize implements OnInit {
  isMobile?: boolean;
  ngOnInit() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1024) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}
