import { Component } from '@angular/core';
import { SearchBarComponent } from "@shared/components/search-bar/search-bar.component";

@Component({
  selector: 'app-create-ad',
  imports: [SearchBarComponent],
  templateUrl: './create-ad.component.html',
  styleUrl: './create-ad.component.css'
})
export class CreateAdComponent {

}
