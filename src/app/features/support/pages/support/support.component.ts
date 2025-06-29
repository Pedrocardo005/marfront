import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { SearchBarComponent } from '@shared/components/search-bar/search-bar.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';

interface Option {
  text: string;
  value: number;
}

@Component({
  selector: 'app-support',
  imports: [
    SearchBarComponent,
    TranslocoModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    ButtonModule,
  ],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css',
})
export class SupportComponent implements OnInit {
  options: Option[] | undefined;

  optionSelected: Option | undefined;

  email: string | undefined;

  text: string | undefined;

  ngOnInit() {
    this.options = [
      {
        text: 'FEATURES.SUPPORT.MAIN-BAR.SELECT.OPTIONS.ONE-TEXT',
        value: 1,
      },
      {
        text: 'FEATURES.SUPPORT.MAIN-BAR.SELECT.OPTIONS.TWO-TEXT',
        value: 2,
      },
      {
        text: 'FEATURES.SUPPORT.MAIN-BAR.SELECT.OPTIONS.THREE-TEXT',
        value: 3,
      },
      {
        text: 'FEATURES.SUPPORT.MAIN-BAR.SELECT.OPTIONS.FOUR-TEXT',
        value: 4,
      },
    ];

    this.optionSelected = this.options[0];
  }
}
