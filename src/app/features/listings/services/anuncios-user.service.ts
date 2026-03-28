import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment.development";
import { PaginateAnuncioUsuarioModel } from "../models/paginate-anuncio-usuario.model";

@Injectable({
  providedIn: "root",
})
export class AnunciosUserService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) { }

  getAnunciosByUser(page: number = 1, pageSize: number = 10) {
    return this.http.get<PaginateAnuncioUsuarioModel>(
      `${this.apiUrl}/anuncios/usuario?page=${page}&page_size=${pageSize}`,
    );
  }

  deleteAnuncio(id: number) {
    return this.http.delete(`${this.apiUrl}/anuncios/${id}`);
  }

  toggleStatus(id: number) {
    return this.http.patch(`${this.apiUrl}/anuncios/toggle-status/${id}`, {});
  }

  createAnuncio(data: FormData) {
    return this.http.post<any>(`${this.apiUrl}/anuncios/`, data);
  }
}
