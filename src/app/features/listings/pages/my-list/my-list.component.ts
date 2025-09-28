import { Component, OnInit } from "@angular/core";
import { AnuncioUsuario } from "@features/listings/models/anuncio-usuario.model";
import { AnunciosUserService } from "@features/listings/services/anuncios-user.service";
import { TranslocoPipe } from "@jsverse/transloco";
import { SearchBarComponent } from "@shared/components/search-bar/search-bar.component";
import { AnuncioUserComponent } from "../../components/anuncio-user/anuncio-user.component";

@Component({
  selector: "app-my-list",
  imports: [SearchBarComponent, TranslocoPipe, AnuncioUserComponent],
  templateUrl: "./my-list.component.html",
  styleUrl: "./my-list.component.css",
})
export class MyListComponent implements OnInit {
  anuncios: AnuncioUsuario[] = [];

  constructor(private readonly anunciosUserService: AnunciosUserService) { }

  ngOnInit(): void {
    this.anunciosUserService.getAnunciosByUser().subscribe((response) => {
      this.anuncios = response.results;
    });
  }
}
