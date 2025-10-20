import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { CatSubcat } from "../models/CatSubcat.model";

@Injectable({
  providedIn: "root",
})
export class CatSubcatService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCatSubcat() {
    return this.http.get<CatSubcat[]>(`${this.apiUrl}/cat-subcat`);
  }
}
