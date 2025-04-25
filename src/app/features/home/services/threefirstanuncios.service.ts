import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ThreeFirstAnuncio } from '../models/ThreeFirstAnuncio.model';

@Injectable({
  providedIn: 'root',
})
export class ThreeFirstAnunciosService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getThreeFirstAnuncios() {
    return this.http.get<ThreeFirstAnuncio[]>(
      `${this.apiUrl}/api/anuncios/primeiros`
    );
  }
}
