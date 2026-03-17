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

  step: number = 1;
  selectedCategory: any = null;
  selectedSubcategory: any = null;

  selectedNodes: TreeSelectNode | TreeSelectNode[] | null = null;

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

  uploadedImages: { file: File, url: string }[] = [];
  draggedImageIndex: number | null = null;

  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      Array.from(input.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.uploadedImages.push({
            file: file,
            url: e.target.result
          });
        };
        reader.readAsDataURL(file);
      });
      input.value = '';
    }
  }

  removeImage(index: number) {
    this.uploadedImages.splice(index, 1);
  }

  onDragStart(index: number) {
    this.draggedImageIndex = index;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent, index: number) {
    event.preventDefault();
    if (this.draggedImageIndex !== null && this.draggedImageIndex !== index) {
      const draggedItem = this.uploadedImages[this.draggedImageIndex];
      this.uploadedImages.splice(this.draggedImageIndex, 1);
      this.uploadedImages.splice(index, 0, draggedItem);
    }
    this.draggedImageIndex = null;
  }

  selectCategory(category: any) {
    if (this.selectedCategory !== category) {
      this.selectedCategory = category;
      this.selectedSubcategory = null;
    }
  }

  selectSubcategory(subcategory: any) {
    this.selectedSubcategory = subcategory;
  }

  nextStep() {
    if (this.selectedCategory && (this.selectedCategory.children.length === 0 || this.selectedSubcategory)) {
      // Sync the selected item to the form's p-treeselect
      const foundItem = this.items.find(i => i.key === this.selectedCategory.key);
      if (foundItem) {
        if (this.selectedCategory.children.length === 0) {
          this.selectedNodes = foundItem;
        } else {
          const foundSubItem = foundItem.children.find(c => c.key === this.selectedSubcategory.key);
          if (foundSubItem) {
            this.selectedNodes = foundSubItem;
          }
        }
      }
      this.step = 2;
    }
  }

  previousStep() {
    this.step = 1;
  }
}
