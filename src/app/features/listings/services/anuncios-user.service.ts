import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment.development";
import { PaginateAnuncioUsuarioModel } from "../models/paginate-anuncio-usuario.model";

@Injectable({
  providedIn: "root",
})
export class AnunciosUserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAnunciosByUser() {
    return this.http.get<PaginateAnuncioUsuarioModel>(
      `${this.apiUrl}/anuncios/usuario`,
    );
  }
}
