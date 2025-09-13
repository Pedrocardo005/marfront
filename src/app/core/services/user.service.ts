import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/app/core/models/User.model";
import { environment } from "src/environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private apiUrl: string = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  register(usuario: User) {
    return this.http.post<User>(`${this.apiUrl}register/`, {
      ...usuario,
    });
  }

  login(usuario: User) {
    return this.http.post<{ token: string }>(`${this.apiUrl}login/`, {
      ...usuario,
    });
  }
}
