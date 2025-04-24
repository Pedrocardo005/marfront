import { Subcat } from './Subcat.model';

export interface CatSubcat {
  nome: string;
  icon: string;
  subcategorias: Subcat[];
}
