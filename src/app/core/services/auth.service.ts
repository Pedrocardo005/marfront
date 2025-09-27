import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "@core/models/User.model";
import { environment } from "@environments/environment.development";
import { BehaviorSubject, catchError, Observable, tap } from "rxjs";
import { ErrorHandlerService } from "./error-handler.service";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private authenticaded$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private apiUrl: string = environment.apiUrl;

  constructor(private tokenService: TokenService, private readonly http: HttpClient, private readonly errorHandlerService: ErrorHandlerService) { }

  private setAuthenticated(value: boolean): void {
    this.authenticaded$.next(value);
  }

  isAuthenticated(): Observable<boolean> {
    this.updateAuthenticated();
    return this.authenticaded$.asObservable();
  }

  updateAuthenticated(): void {
    const token = this.tokenService.getToken();
    this.setAuthenticated(!!token);
  }

  register(usuario: User) {
    return this.http.post<User>(`${this.apiUrl}/register/`, {
      ...usuario,
    });
  }

  login(usuario: User) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login/`, {
      ...usuario,
    }).pipe(
      tap((response) => {
        this.tokenService.saveToken(response.token);
        this.updateAuthenticated();
      }),
      catchError(this.errorHandlerService.handleError.bind(this.errorHandlerService)),
    );
  }

  logout() {
    this.tokenService.removeToken();
    this.updateAuthenticated();
    return this.http.post(`${this.apiUrl}/logout/`, {});
  }
}
