import { CommonModule } from "@angular/common";
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AnuncioUsuario } from "@features/listings/models/anuncio-usuario.model";
import { AnunciosUserService } from "@features/listings/services/anuncios-user.service";
import { TranslocoPipe } from "@jsverse/transloco";
import { Button } from "primeng/button";
import { InputSwitchModule } from "primeng/inputswitch";

@Component({
  selector: "app-anuncio-user",
  imports: [TranslocoPipe, CommonModule, Button, InputSwitchModule, FormsModule],
  templateUrl: "./anuncio-user.component.html",
  styleUrl: "./anuncio-user.component.css",
})
export class AnuncioUserComponent implements OnInit {
  @Input() anuncio?: AnuncioUsuario;
  @Output() anuncioDeleted = new EventEmitter<number>();

  private anunciosUserService = inject(AnunciosUserService);

  ngOnInit(): void {}

  onDelete() {
    if (this.anuncio?.id) {
      this.anunciosUserService.deleteAnuncio(this.anuncio.id).subscribe(() => {
        if (this.anuncio?.id)
          this.anuncioDeleted.emit(this.anuncio.id);
      });
    }
  }

  onToggleStatus() {
    if (this.anuncio?.id) {
      this.anunciosUserService.toggleStatus(this.anuncio.id).subscribe();
    }
  }

  get formatedDate() {
    const dateObject = this.anuncio?.data_expirar
      ? new Date(String(this.anuncio.data_expirar).split("/").reverse().join("-"))
      : null;

    return dateObject;
  }
}
