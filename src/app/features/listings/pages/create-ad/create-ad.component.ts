import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AnunciosUserService } from "@features/listings/services/anuncios-user.service";
import { TranslocoPipe } from '@jsverse/transloco';
import { SearchBarComponent } from "@shared/components/search-bar/search-bar.component";
import { CatSubcatService } from '@shared/services/catsubcat.service';
import { MessageService } from "primeng/api";
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumber } from "primeng/inputnumber";
import { InputTextModule } from 'primeng/inputtext';
import { RadioButton } from 'primeng/radiobutton';
import { Select } from "primeng/select";
import { TextareaModule } from 'primeng/textarea';
import { Toast } from "primeng/toast";
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
    CheckboxModule,
    Toast
  ],
  providers: [MessageService],
  templateUrl: './create-ad.component.html',
  styleUrl: './create-ad.component.css'
})
export class CreateAdComponent implements OnInit {

  formTitle: string = '';
  formDescription: string = '';
  formPrice?: number;

  formPostalCode: string = '';
  formCity: string = '';
  formStreet: string = '';
  formNumber: string = '';

  formProviderName: string = '';
  formProviderPhone: string = '';

  termsAccepted: boolean = false;

  onCepChange(value: string) {
    if (!value) {
      this.formPostalCode = '';
      return;
    }
    let numericValue = value.replace(/\D/g, '');
    if (numericValue.length > 5) {
      numericValue = numericValue.substring(0, 5) + '-' + numericValue.substring(5, 8);
    }
    this.formPostalCode = numericValue;
  }

  onPhoneChange(value: string) {
    if (!value) {
      this.formProviderPhone = '';
      return;
    }
    let numericValue = value.replace(/\D/g, '');
    if (numericValue.length > 11) {
      numericValue = numericValue.substring(0, 11);
    }

    if (numericValue.length <= 2) {
      this.formProviderPhone = numericValue.length > 0 ? `(${numericValue}` : '';
    } else if (numericValue.length <= 6) {
      this.formProviderPhone = `(${numericValue.substring(0, 2)}) ${numericValue.substring(2)}`;
    } else if (numericValue.length <= 10) {
      this.formProviderPhone = `(${numericValue.substring(0, 2)}) ${numericValue.substring(2, 6)}-${numericValue.substring(6)}`;
    } else {
      this.formProviderPhone = `(${numericValue.substring(0, 2)}) ${numericValue.substring(2, 7)}-${numericValue.substring(7)}`;
    }
  }


  exibitionType: string = 'sell';

  typeOffer?: SelectItem[];
  typeOfferSelected?: SelectItem;

  conditionOptions?: SelectItem[];
  selectedCondition?: SelectItem;

  shippingOptions?: SelectItem[];
  selectedShipping?: SelectItem;

  paypalOptions?: SelectItem[];
  selectedPaypal?: SelectItem;

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

  constructor(
    private readonly catsubcatService: CatSubcatService,
    private readonly anunciosUserService: AnunciosUserService,
    private readonly router: Router,
    private readonly messageService: MessageService
  ) { }

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

    this.conditionOptions = [
      { code: 'SH', name: 'FEATURES.LISTINGS.PAGES.CREATE-AD.CONDITION.SH' },
      { code: 'N', name: 'FEATURES.LISTINGS.PAGES.CREATE-AD.CONDITION.N' },
      { code: 'RB', name: 'FEATURES.LISTINGS.PAGES.CREATE-AD.CONDITION.RB' }
    ];

    this.shippingOptions = [
      { code: '1', name: 'FEATURES.LISTINGS.PAGES.CREATE-AD.SHIPPING.DHL' },
      { code: '2', name: 'FEATURES.LISTINGS.PAGES.CREATE-AD.SHIPPING.HERMES' },
      { code: '3', name: 'FEATURES.LISTINGS.PAGES.CREATE-AD.SHIPPING.DPD' },
      { code: '4', name: 'FEATURES.LISTINGS.PAGES.CREATE-AD.SHIPPING.GLS' },
      { code: '5', name: 'FEATURES.LISTINGS.PAGES.CREATE-AD.SHIPPING.UPS' },
      { code: '6', name: 'FEATURES.LISTINGS.PAGES.CREATE-AD.SHIPPING.TNT' },
      { code: '7', name: 'FEATURES.LISTINGS.PAGES.CREATE-AD.SHIPPING.OUTRO' }
    ];

    this.paypalOptions = [
      { code: 'true', name: 'FEATURES.LISTINGS.PAGES.CREATE-AD.PAYPAL.YES' },
      { code: 'false', name: 'FEATURES.LISTINGS.PAGES.CREATE-AD.PAYPAL.NO' }
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

  onSubmit() {
    if (!this.termsAccepted) return;

    const formData = new FormData();

    let subCategoriaId: number | undefined;
    if (this.selectedNodes) {
      if (Array.isArray(this.selectedNodes)) {
        subCategoriaId = this.selectedNodes[0]?.data;
      } else {
        subCategoriaId = this.selectedNodes.data;
      }
    }

    if (subCategoriaId !== undefined) {
      formData.append('sub_categoria_id', subCategoriaId.toString());
    }

    formData.append('data_expirar', '24/10/2100');
    formData.append('ativo', 'true');
    formData.append('vendendo', this.exibitionType === 'sell' ? 'true' : 'false');
    formData.append('titulo', this.formTitle);
    formData.append('descricao', this.formDescription);

    if (this.formPrice !== undefined) {
      formData.append('preco', this.formPrice.toString());
    }

    if (this.typeOfferSelected?.code) {
      formData.append('tipo_oferta', this.typeOfferSelected.code);
    }

    if (this.selectedCondition?.code) {
      formData.append('condicao', this.selectedCondition.code);
    }

    if (this.selectedShipping?.code) {
      formData.append('envio', this.selectedShipping.code);
    }

    if (this.selectedPaypal?.code !== undefined) {
      formData.append('pagamento_paypal', this.selectedPaypal.code);
    }

    formData.append('codigo_postal', this.formPostalCode);
    formData.append('cidade', this.formCity);
    formData.append('rua', this.formStreet);
    formData.append('numero', this.formNumber);
    formData.append('provedor', this.formProviderName);
    formData.append('telefone', this.formProviderPhone);

    this.uploadedImages.forEach((img, index) => {
      formData.append(`fotos[${index}].imagem`, img.file);
      formData.append(`fotos[${index}].ordem`, (index + 1).toString());
    });

    this.anunciosUserService.createAnuncio(formData).subscribe({
      next: () => {
        this.messageService.add({
          severity: "success",
          summary: "Sucesso",
          detail: "Anúncio criado com sucesso",
        });

        setTimeout(() => {
          this.router.navigate(['/']);
        }, 4000);
      },
      error: (err: any) => {
        this.messageService.add({
          severity: "error",
          summary: "Erro",
          detail: "Erro ao criar anúncio!",
        });
        console.error('Error creating ad', err);
      }
    });
  }
}
