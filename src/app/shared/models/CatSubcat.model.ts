export interface CatSubcat {
  id?: number;
  nome: string;
  icon: string;
  subcategorias: {
    id?: number;
    name: string;
  }[];
}
