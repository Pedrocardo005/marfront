import { AnuncioUsuario } from "./anuncio-usuario.model";

export interface PaginateAnuncioUsuarioModel {
  count: number;
  next: string;
  previous: string;
  results: AnuncioUsuario[];
}
