import { Component, Input } from '@angular/core';
import { SearchAnuncio } from '@features/searchs/models/SearchAnuncio.model';

@Component({
  selector: 'app-queue-offers',
  imports: [],
  templateUrl: './queue-offers.component.html',
  styleUrl: './queue-offers.component.css',
})
export class QueueOffersComponent {
  @Input()
  anuncio?: SearchAnuncio;
}
