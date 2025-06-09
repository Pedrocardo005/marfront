import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { SelectChangeEvent, SelectModule } from 'primeng/select';
import { TranslateService } from '../../services/translate.service';

interface Language {
  name: string;
  code: string;
  icon: string;
  alt: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [TranslocoModule, SelectModule, FormsModule, RouterLink],
})
export class FooterComponent implements OnInit {
  currentLanguage: Language | undefined;
  languages: Language[] | undefined;

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.currentLanguage = {
      name: 'Português',
      code: 'pt-BR',
      icon: 'assets/icons/brazil.svg',
      alt: 'CORE.LAYOUT.FOOTER.COUNTRIES-ALT.BRAZIL',
    };

    this.languages = [
      {
        name: 'Português',
        code: 'pt-BR',
        icon: 'assets/icons/brazil.svg',
        alt: 'CORE.LAYOUT.FOOTER.COUNTRIES-ALT.BRAZIL',
      },
      {
        name: 'English',
        code: 'en',
        icon: 'assets/icons/united-state.svg',
        alt: 'CORE.LAYOUT.FOOTER.COUNTRIES-ALT.UNITED-STATE',
      },
      {
        name: 'Español',
        code: 'es',
        icon: 'assets/icons/spain.svg',
        alt: 'CORE.LAYOUT.FOOTER.COUNTRIES-ALT.SPAIN',
      },
      {
        name: 'Deutsch',
        code: 'de',
        icon: 'assets/icons/germany.svg',
        alt: 'CORE.LAYOUT.FOOTER.COUNTRIES-ALT.GERMANY',
      },
    ];
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      this.currentLanguage = JSON.parse(storedLanguage);

      if (this.currentLanguage) {
        this.translateService.setLanguage(this.currentLanguage.code);
      }
    }
  }

  changeLanguage(event: SelectChangeEvent) {
    this.currentLanguage = event.value;

    if (this.currentLanguage) {
      this.translateService.setLanguage(this.currentLanguage.code);
      localStorage.setItem('language', JSON.stringify(this.currentLanguage));
    }
  }
}
