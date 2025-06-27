import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { SearchBarComponent } from '@shared/components/search-bar/search-bar.component';

@Component({
  selector: 'app-support',
  imports: [SearchBarComponent, TranslocoModule],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css',
})
export class SupportComponent {}
