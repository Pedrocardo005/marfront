export interface AnuncioUsuario {
  id: number;
  ativo: boolean;
  views: number;
  data_expirar: Date;
  preco: number;
  url_foto: string;
}
