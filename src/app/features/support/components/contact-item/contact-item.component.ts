import { Component, Input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-contact-item',
  imports: [TranslocoModule],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.css',
})
export class ContactItemComponent {
  @Input() text: string | undefined;
  @Input() urlImage: string | undefined;
  @Input() urlAlt: string | undefined;
  @Input() urlSkip: string | undefined;

  goToSkipLink() {
    window.open(this.urlSkip);
  }
}
