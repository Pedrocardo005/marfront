import { Component, Input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { CarouselModule } from 'primeng/carousel';
import { CatSubcat } from '../../models/CatSubcat.model';

@Component({
  selector: 'app-category-carousel',
  imports: [CarouselModule, TranslocoModule],
  templateUrl: './category-carousel.component.html',
  styleUrl: './category-carousel.component.css',
})
export class CategoryCarouselComponent {
  @Input() categories: CatSubcat[] = [];
}
