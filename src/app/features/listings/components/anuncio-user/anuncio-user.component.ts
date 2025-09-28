import { Component, Input, OnInit } from "@angular/core";
import { AnuncioUsuario } from "@features/listings/models/anuncio-usuario.model";
import { TranslocoPipe } from "@jsverse/transloco";

@Component({
  selector: "app-anuncio-user",
  imports: [TranslocoPipe],
  templateUrl: "./anuncio-user.component.html",
  styleUrl: "./anuncio-user.component.css",
})
export class AnuncioUserComponent implements OnInit {
  @Input() anuncio?: AnuncioUsuario;

  ngOnInit(): void { }
}
