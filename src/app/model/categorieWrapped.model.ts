import { Categorie } from './categorie.model';
export class CategorieWrapper {
  _embedded!: { categories: Categorie[] }; //Embedded est un objet Json qui contient une propriété categorie qui est un tableau de catégories Permet de suivre le forma retourné par les api data rest
}
