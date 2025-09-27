import { Component, OnInit } from "@angular/core";
import { AnunciosUserService } from "@features/listings/services/anuncios-user.service";
import { TranslocoPipe } from "@jsverse/transloco";
import { SearchBarComponent } from "@shared/components/search-bar/search-bar.component";

@Component({
  selector: "app-my-list",
  imports: [SearchBarComponent, TranslocoPipe],
  templateUrl: "./my-list.component.html",
  styleUrl: "./my-list.component.css",
})
export class MyListComponent implements OnInit {
  constructor(private readonly anunciosUserService: AnunciosUserService) {}

  ngOnInit(): void {
    this.anunciosUserService.getAnunciosByUser().subscribe((anuncios) => {
      console.log(anuncios);
    });
  }
}
