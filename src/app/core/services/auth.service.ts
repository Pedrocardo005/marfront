import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private authenticaded$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private tokenService: TokenService) {}

  private setAuthenticated(value: boolean): void {
    this.authenticaded$.next(value);
  }

  isAuthenticated(): Observable<boolean> {
    return this.authenticaded$.asObservable();
  }

  updateAuthenticated(): void {
    const token = this.tokenService.getToken();
    this.setAuthenticated(!!token);
  }
}
