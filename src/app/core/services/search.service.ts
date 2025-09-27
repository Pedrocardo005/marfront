import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { SearchAnuncio } from "../../features/searchs/models/SearchAnuncio.model";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  searchAnuncios(q: string, category: string, city: string) {
    return this.http.get<SearchAnuncio[]>(this.apiUrl + "/listsearch/", {
      params: {
        q: q,
        category: category,
        city: city,
      },
    });
  }
}
