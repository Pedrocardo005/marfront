import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { Category } from '../../models/Category.model';

interface Distance {
  name: string;
  value: number;
}

@Component({
  selector: 'app-search-bar',
  imports: [
    InputTextModule,
    FormsModule,
    TranslocoModule,
    SelectModule,
    ButtonModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent implements OnInit {
  searchValue?: string;
  searchAddress?: string;
  catList?: Category[];
  distances?: Distance[];

  ngOnInit() {
    this.catList = [
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
