import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models/User.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string = environment.api;

  constructor(private readonly http: HttpClient) {}

  register(usuario: User) {
    return this.http.post<{ user: User }>(`${this.apiUrl}/usuarios`, {
      ...usuario,
    });
  }

  login(usuario: User) {
    return this.http.post<{ user: User }>(`${this.apiUrl}/login`, {
      ...usuario,
    });
  }
}
