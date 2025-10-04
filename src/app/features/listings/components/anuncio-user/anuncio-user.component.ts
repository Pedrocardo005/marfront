import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { AnuncioUsuario } from "@features/listings/models/anuncio-usuario.model";
import { TranslocoPipe } from "@jsverse/transloco";

@Component({
  selector: "app-anuncio-user",
  imports: [TranslocoPipe, CommonModule],
  templateUrl: "./anuncio-user.component.html",
  styleUrl: "./anuncio-user.component.css",
})
export class AnuncioUserComponent implements OnInit {
  @Input() anuncio?: AnuncioUsuario;

  ngOnInit(): void { }

  get formatedDate() {
    const dateObject = this.anuncio?.data_expirar
      ? new Date(String(this.anuncio.data_expirar).split('/').reverse().join('-'))
      : null;

    return dateObject;
  }
}
