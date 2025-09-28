export interface AnuncioUsuario {
  id: number;
  ativo: boolean;
  titulo: string;
  views: number;
  data_expirar: Date;
  preco: number;
  url_foto: string;
}
