import { Component, Input } from '@angular/core';
import { SearchAnuncio } from '@features/searchs/models/SearchAnuncio.model';

@Component({
  selector: 'app-mobile-offers',
  imports: [],
  templateUrl: './mobile-offers.component.html',
  styleUrl: './mobile-offers.component.css',
})
export class MobileOffersComponent {
  @Input()
  anuncio!: SearchAnuncio;
}
