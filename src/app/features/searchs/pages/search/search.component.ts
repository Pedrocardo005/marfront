import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QueueOffersComponent } from '@features/searchs/components/queue-offers/queue-offers.component';
import { RightDrawerComponent } from '@features/searchs/components/right-drawer/right-drawer.component';
import { StackOffersComponent } from '@features/searchs/components/stack-offers/stack-offers.component';
import { SearchAnuncio } from '@features/searchs/models/SearchAnuncio.model';
import { TranslocoModule } from '@jsverse/transloco';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { CatSubcat } from 'src/app/features/home/models/CatSubcat.model';
import { HandleResize } from 'src/app/shared/abstracts/components/HandleResize';
import { SearchService } from '../../../../core/services/search.service';
import { SearchBarComponent } from '../../../../shared/components/search-bar/search-bar.component';
import { CategoryCarouselComponent } from '../../../home/components/category-carousel/category-carousel.component';

interface Options {
  name: string;
  code: string;
}

@Component({
  selector: 'app-search',
  imports: [
    SearchBarComponent,
    TranslocoModule,
    CategoryCarouselComponent,
    InputNumberModule,
    FormsModule,
    ButtonModule,
    RightDrawerComponent,
    SelectModule,
    StackOffersComponent,
    QueueOffersComponent,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent extends HandleResize {
  private readonly route = inject(ActivatedRoute);

  catSubcatList?: CatSubcat[];
  filterPriceMinimum?: number;
  filterPriceMaximum?: number;
  searchedAnuncios?: SearchAnuncio[];
  options?: Options[];

  query: string = '';
  category: string = '';
  city: string = '';
  viewQueue: boolean = false;

  searchService: SearchService = inject(SearchService);

  override ngOnInit() {
    this.catSubcatList = [
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.CAR-MOTORCYCLE.TITLE',
        icon: 'pi pi-car',
        subcategorias: [
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.CAR-MOTORCYCLE.SUBCATEGORIES.FIRST',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.CAR-MOTORCYCLE.SUBCATEGORIES.SECOND',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.CAR-MOTORCYCLE.SUBCATEGORIES.THIRD',
          },
        ],
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.REAL-ESTATE-HOUSES.TITLE',
        icon: 'pi pi-home',
        subcategorias: [
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.REAL-ESTATE-HOUSES.SUBCATEGORIES.FIRST',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.REAL-ESTATE-HOUSES.SUBCATEGORIES.SECOND',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.REAL-ESTATE-HOUSES.SUBCATEGORIES.THIRD',
          },
        ],
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.JOBS.TITLE',
        icon: 'pi pi-briefcase',
        subcategorias: [
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.JOBS.SUBCATEGORIES.FIRST',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.JOBS.SUBCATEGORIES.SECOND',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.JOBS.SUBCATEGORIES.THIRD',
          },
        ],
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.ADMISSION-TICKETS.TITLE',
        icon: 'pi pi-tag',
        subcategorias: [
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.ADMISSION-TICKETS.SUBCATEGORIES.FIRST',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.ADMISSION-TICKETS.SUBCATEGORIES.SECOND',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.ADMISSION-TICKETS.SUBCATEGORIES.THIRD',
          },
        ],
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.LEISURE-HOBBIES-FUN.TITLE',
        icon: 'pi pi-palette',
        subcategorias: [
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.LEISURE-HOBBIES-FUN.SUBCATEGORIES.FIRST',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.LEISURE-HOBBIES-FUN.SUBCATEGORIES.SECOND',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.LEISURE-HOBBIES-FUN.SUBCATEGORIES.THIRD',
          },
        ],
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.MUSIC-FILM-BOOKS.TITLE',
        icon: 'pi pi-headphones',
        subcategorias: [
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.MUSIC-FILM-BOOKS.SUBCATEGORIES.FIRST',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.MUSIC-FILM-BOOKS.SUBCATEGORIES.SECOND',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.MUSIC-FILM-BOOKS.SUBCATEGORIES.THIRD',
          },
        ],
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.HOME-GARDEN.TITLE',
        icon: 'pi pi-warehouse',
        subcategorias: [
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.HOME-GARDEN.SUBCATEGORIES.FIRST',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.HOME-GARDEN.SUBCATEGORIES.SECOND',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.HOME-GARDEN.SUBCATEGORIES.THIRD',
          },
        ],
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.GIVE-AWAY-EXCHANGE.TITLE',
        icon: 'pi pi-wallet',
        subcategorias: [
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.GIVE-AWAY-EXCHANGE.SUBCATEGORIES.FIRST',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.GIVE-AWAY-EXCHANGE.SUBCATEGORIES.SECOND',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.GIVE-AWAY-EXCHANGE.SUBCATEGORIES.THIRD',
          },
        ],
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.PETS.TITLE',
        icon: 'fa-solid fa-paw',
        subcategorias: [
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.PETS.SUBCATEGORIES.FIRST',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.PETS.SUBCATEGORIES.SECOND',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.PETS.SUBCATEGORIES.THIRD',
          },
        ],
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.FAMILY-CHILD-BABY.TITLE',
        icon: 'fa-solid fa-baby-carriage',
        subcategorias: [
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.FAMILY-CHILD-BABY.SUBCATEGORIES.FIRST',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.FAMILY-CHILD-BABY.SUBCATEGORIES.SECOND',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.FAMILY-CHILD-BABY.SUBCATEGORIES.THIRD',
          },
        ],
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.FASHION-BEAUTY.TITLE',
        icon: 'fa-solid fa-shirt',
        subcategorias: [
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.FASHION-BEAUTY.SUBCATEGORIES.FIRST',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.FASHION-BEAUTY.SUBCATEGORIES.SECOND',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.FASHION-BEAUTY.SUBCATEGORIES.THIRD',
          },
        ],
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.LESSONS-COURSES.TITLE',
        icon: 'fa-solid fa-graduation-cap',
        subcategorias: [
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.LESSONS-COURSES.SUBCATEGORIES.FIRST',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.LESSONS-COURSES.SUBCATEGORIES.SECOND',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.LESSONS-COURSES.SUBCATEGORIES.THIRD',
          },
        ],
      },
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.MULTIMEDIA-ELECTRONICS.TITLE',
        icon: 'fa-solid fa-tv',
        subcategorias: [
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.MULTIMEDIA-ELECTRONICS.SUBCATEGORIES.FIRST',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.MULTIMEDIA-ELECTRONICS.SUBCATEGORIES.SECOND',
          },
          {
            name: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.MULTIMEDIA-ELECTRONICS.SUBCATEGORIES.THIRD',
          },
        ],
      },
    ];

    super.ngOnInit();

    this.route.queryParams.subscribe((params) => {
      this.query = params['query'] ?? '';
      this.category = params['category'] ?? '';
      this.city = params['city'] ?? '';
      /* this.searchService
        .searchAnuncios(this.query, this.category, this.city)
        .subscribe((value) => {
          this.searchedAnuncios = value;
        }); */
    });

    this.options = [
      {
        name: 'FEATURES.SEARCHS.PAGES.SEARCH.MAIN-BAR.HEADER-BAR.SELECT.BEST',
        code: 'BF',
      },
      {
        name: 'FEATURES.SEARCHS.PAGES.SEARCH.MAIN-BAR.HEADER-BAR.SELECT.NEWEST',
        code: 'NF',
      },
      {
        name: 'FEATURES.SEARCHS.PAGES.SEARCH.MAIN-BAR.HEADER-BAR.SELECT.CHEAP',
        code: 'CF',
      },
    ];
  }

  filtrarPreco(min?: number, max?: number) {
    if (this.searchedAnuncios && min && min >= 0 && max && max >= 0) {
      const cloneAnuncios = [...this.searchedAnuncios];

      this.searchedAnuncios = cloneAnuncios.filter(
        (anuncio) => anuncio.preco >= min && anuncio.preco <= max
      );
    }
  }

  changeViewQueue(value: boolean) {
    this.viewQueue = value;
  }
}
