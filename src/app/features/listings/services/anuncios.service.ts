import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class AnunciosService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  createAnuncio(data: FormData) {
    return this.http.post<any>(`${this.apiUrl}/anuncios/`, data);
  }
}
