import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoPipe } from '@jsverse/transloco';
import { SearchBarComponent } from "@shared/components/search-bar/search-bar.component";
import { CatSubcatService } from '@shared/services/catsubcat.service';
import { Fluid } from "primeng/fluid";
import { InputNumber } from "primeng/inputnumber";
import { InputTextModule } from 'primeng/inputtext';
import { RadioButton } from 'primeng/radiobutton';
import { Select } from "primeng/select";
import { TextareaModule } from 'primeng/textarea';
import { TreeSelect } from 'primeng/treeselect';

interface TreeSelectNode {
  key: string;
  label: string;
  data?: number;
}

interface SelectItem {
  name: string;
  code: string;
}

@Component({
  selector: 'app-create-ad',
  imports: [
    SearchBarComponent,
    TranslocoPipe,
    TreeSelect,
    FormsModule,
    RadioButton,
    InputTextModule,
    TextareaModule,
    CommonModule,
    Select,
    InputNumber,
    Fluid
  ],
  templateUrl: './create-ad.component.html',
  styleUrl: './create-ad.component.css'
})
export class CreateAdComponent implements OnInit {

  formTitle: string = '';
  formDescription: string = '';
  formPrice?: number;

  exibitionType: string = 'sell';

  typeOffer?: SelectItem[];
  typeOfferSelected?: SelectItem;

  items: {
    key: string;
    label: string;
    data?: number;
    children: TreeSelectNode[];
  }[] = [];

  selectedNodes: TreeSelectNode = { key: '', label: '' };

  constructor(private readonly catsubcatService: CatSubcatService) { }

  ngOnInit() {
    this.catsubcatService.getCatSubcat().subscribe((response) => {
      this.items = response.map(catSubcat => ({
        key: `${catSubcat.id}`,
        label: catSubcat.nome,
        data: catSubcat.id,
        children: catSubcat.subcategorias.map(subcat => ({
          key: `${catSubcat.id}-${subcat.id}`,
          label: subcat.name,
          data: subcat.id
        }))
      }));
    });

    this.typeOffer = [
      {
        code: '1',
        name: 'FEATURES.LISTINGS.PAGES.CREATE-AD.OFFER-TYPE.FIXED',
      },
      {
        code: '2',
        name: 'FEATURES.LISTINGS.PAGES.CREATE-AD.OFFER-TYPE.VB',
      },
      {
        code: '3',
        name: 'FEATURES.LISTINGS.PAGES.CREATE-AD.OFFER-TYPE.SD',
      },
      {
        code: '4',
        name: 'FEATURES.LISTINGS.PAGES.CREATE-AD.OFFER-TYPE.PRESENT',
      }
    ];
  }
}
