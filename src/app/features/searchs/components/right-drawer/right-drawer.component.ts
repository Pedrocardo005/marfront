import { Component, Input } from '@angular/core';
import { DrawerModule} from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-right-drawer',
  imports: [DrawerModule, ButtonModule, InputNumberModule, FormsModule, TranslocoModule],
  templateUrl: './right-drawer.component.html',
  styleUrl: './right-drawer.component.css'
})
export class RightDrawerComponent {
  visible: boolean = false;
  filterMinPreco?: number;
  filterMaxPreco?: number;

  @Input() filtrarPreco?: (min?: number, max?: number) => void;

  callFiltrarPreco() {
    if (this.filtrarPreco) {
      this.filtrarPreco(this.filterMinPreco, this.filterMaxPreco);
      this.filterMinPreco = 0;
      this.filterMaxPreco = 0;
      this.visible = false;
    } else {
      console.log('filtrarPreco not assigned');
      
    }
  }
}
