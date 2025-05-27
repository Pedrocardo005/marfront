import { Component, Input } from '@angular/core';
import { SearchAnuncio } from '@features/searchs/models/SearchAnuncio.model';

@Component({
  selector: 'app-stack-offers',
  imports: [],
  templateUrl: './stack-offers.component.html',
  styleUrl: './stack-offers.component.css',
})
export class StackOffersComponent {
  @Input()
  oferta?: SearchAnuncio;
}
