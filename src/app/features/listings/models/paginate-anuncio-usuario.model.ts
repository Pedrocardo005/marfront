import { AnuncioUsuario } from "./anuncio-usuario.model";

export interface PaginateAnuncioUsuarioModel {
  count: number;
  next: number;
  previous: number;
  data: AnuncioUsuario[];
}
