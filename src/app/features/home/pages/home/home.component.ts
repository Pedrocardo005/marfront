import { Component, OnInit } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { SearchBarComponent } from '../../../../shared/components/search-bar/search-bar.component';
import { CategoryCarouselComponent } from '../../components/category-carousel/category-carousel.component';
import { CatSubcat } from '../../models/CatSubcat.model';
import { ThreeFirstAnuncio } from '../../models/ThreeFirstAnuncio.model';
import { ThreeFirstAnunciosService } from '../../services/threefirstanuncios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [TranslocoModule, CategoryCarouselComponent, SearchBarComponent],
})
export class HomeComponent implements OnInit {
  isMobile?: boolean;
  catSubcatList?: CatSubcat[];
  threeFirstAnuncios?: ThreeFirstAnuncio[];

  constructor(private threeFirstAnuncioService: ThreeFirstAnunciosService) {}

  ngOnInit() {
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

    window.addEventListener('resize', this.handleResize.bind(this));

    this.threeFirstAnuncioService
      .getThreeFirstAnuncios()
      .subscribe((response) => (this.threeFirstAnuncios = response));
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
