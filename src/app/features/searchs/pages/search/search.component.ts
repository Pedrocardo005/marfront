import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { Category } from 'src/app/shared/models/Category.model';
import { SearchBarComponent } from '../../../../shared/components/search-bar/search-bar.component';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  imports: [SearchBarComponent, TranslocoModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  query?: string;
  category?: number;
  city?: string;
  categories?: Category[];

  searchService: SearchService = inject(SearchService);

  ngOnInit() {
    this.categories = [
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.CAR-MOTORCYCLE.TITLE',
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.REAL-ESTATE-HOUSES.TITLE',
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.JOBS.TITLE',
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.ADMISSION-TICKETS.TITLE',
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.LEISURE-HOBBIES-FUN.TITLE',
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.MUSIC-FILM-BOOKS.TITLE',
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.HOME-GARDEN.TITLE',
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.GIVE-AWAY-EXCHANGE.TITLE',
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.PETS.TITLE',
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.FAMILY-CHILD-BABY.TITLE',
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.FASHION-BEAUTY.TITLE',
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.LESSONS-COURSES.TITLE',
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.MULTIMEDIA-ELECTRONICS.TITLE',
      },
    ];
  }
}
