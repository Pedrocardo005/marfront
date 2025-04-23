import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { CatSubcat } from '../../models/CatSubcat.model';

interface Cat {
  nome: string;
}

interface Distance {
  name: string;
  value: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    InputTextModule,
    FormsModule,
    TranslocoModule,
    SelectModule,
    ButtonModule,
  ],
})
export class HomeComponent implements OnInit {
  searchValue?: string;
  searchAddress?: string;
  catSubcatList?: CatSubcat[];
  catList?: Cat[];
  distances?: Distance[];

  ngOnInit() {
    this.catSubcatList = [
      {
        nome: 'FEATURES.HOME.PAGES.HOME.CATEGORIES.CAR-MOTORCYCLE.TITLE',
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

    this.catList = this.catSubcatList.map((catSubcat) => ({
      nome: catSubcat.nome,
    }));

    this.distances = [
      { name: '+5km', value: 5 },
      { name: '+10km', value: 10 },
      { name: '+20km', value: 20 },
      { name: '+30km', value: 30 },
      { name: '+50km', value: 50 },
      { name: '+100km', value: 100 },
      { name: '+150km', value: 150 },
      { name: '+200km', value: 200 },
    ];
  }
}
