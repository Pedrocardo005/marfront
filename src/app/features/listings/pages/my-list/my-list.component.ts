import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnuncioUsuario } from "@features/listings/models/anuncio-usuario.model";
import { AnunciosUserService } from "@features/listings/services/anuncios-user.service";
import { TranslocoPipe } from "@jsverse/transloco";
import { SearchBarComponent } from "@shared/components/search-bar/search-bar.component";
import { AnuncioUserComponent } from "../../components/anuncio-user/anuncio-user.component";

@Component({
  selector: "app-my-list",
  imports: [SearchBarComponent, TranslocoPipe, AnuncioUserComponent, CommonModule],
  templateUrl: "./my-list.component.html",
  styleUrl: "./my-list.component.css",
})
export class MyListComponent implements OnInit {
  anuncios: AnuncioUsuario[] = [];

  currentPage: number = 1;
  pageSize: number = 10;
  totalCount: number = 0;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  get totalPages(): number {
    return Math.ceil(this.totalCount / this.pageSize);
  }

  get pages(): number[] {
    const total = this.totalPages;
    const current = this.currentPage;
    const delta = 2;
    const range: number[] = [];
    const start = Math.max(1, current - delta);
    const end = Math.min(total, current + delta);
    for (let i = start; i <= end; i++) range.push(i);
    return range;
  }

  constructor(private readonly anunciosUserService: AnunciosUserService) { }

  ngOnInit(): void {
    this.loadPage(this.currentPage);
  }

  loadPage(page: number): void {
    this.currentPage = page;
    this.anunciosUserService.getAnunciosByUser(page, this.pageSize).subscribe((response) => {
      this.anuncios = response.results;
      this.totalCount = response.count;
    });
  }

  onAnuncioDeleted(anuncioId: number) {
    this.anuncios = this.anuncios.filter(anuncio => anuncio.id !== anuncioId);
    this.totalCount = Math.max(0, this.totalCount - 1);
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.loadPage(1);
  }
}
