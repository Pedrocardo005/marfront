import { Component } from "@angular/core";
import { TranslocoPipe } from "@jsverse/transloco";
import { SearchBarComponent } from "@shared/components/search-bar/search-bar.component";

@Component({
  selector: "app-my-list",
  imports: [SearchBarComponent, TranslocoPipe],
  templateUrl: "./my-list.component.html",
  styleUrl: "./my-list.component.css",
})
export class MyListComponent {}
