import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoPipe } from '@jsverse/transloco';
import { SearchBarComponent } from "@shared/components/search-bar/search-bar.component";
import { CatSubcatService } from '@shared/services/catsubcat.service';
import { RadioButton } from 'primeng/radiobutton';
import { TreeSelect } from 'primeng/treeselect';

@Component({
  selector: 'app-create-ad',
  imports: [SearchBarComponent, TranslocoPipe, TreeSelect, FormsModule, RadioButton],
  templateUrl: './create-ad.component.html',
  styleUrl: './create-ad.component.css'
})
export class CreateAdComponent implements OnInit {

  exibitionType: string = 'sell';

  items: {
    key: string;
    label: string;
    data?: number;
    children: {
      key: string;
      label: string;
      data?: number;
    }[];
  }[] = [];

  selectedNodes: {
    key: string;
    label: string;
    data?: number;
  } = { key: '', label: '' };

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
  }
}
