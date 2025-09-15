import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private authenticaded$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  isAuthenticated(): Observable<boolean> {
    return this.authenticaded$.asObservable();
  }

  setAuthenticated(value: boolean): void {
    this.authenticaded$.next(value);
  }
}
