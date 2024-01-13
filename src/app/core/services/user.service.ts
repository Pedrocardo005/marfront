import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/core/models/User.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string = 'http://localhost:8080';

  constructor(private readonly http: HttpClient) {}

  register(usuario: User) {
    return this.http.post<{ user: User }>(`${this.apiUrl}/usuarios`, {
      ...usuario,
    });
  }
}
