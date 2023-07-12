import { Component, OnInit} from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { ProduitsComponent } from '../produits/produits.component';
import { ProduitService } from '../services/produit.service';


@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrls: ['./recherche-par-categorie.component.css']
})
export class RechercheParCategorieComponent {

  IdCategorie !: number;
  categories!: Categorie[];
  produits!: Produit[];



  constructor(private produitService : ProduitService){

  }

  ngOnInit(): void{
    this.produitService.listeCategories().
    subscribe(cats => {this.categories = cats._embedded.categories; // J'affecte la variable cats à this.categorie, qui va contenir toutes le catégories qui sont bindées au select dans html
     console.log(cats);
    });

  }

  /** */

  /**Au choix d'une catégorie, on appelle la méthode rechercheParCategorie, à laquelle je vais transmettre l'id categorie qui contiendra l'id de la catégorie choisie dans ma liste*/
  onChange(){
   this.produitService.rechercherParCategorie(this.IdCategorie).
    subscribe(prods =>{this.produits=prods}); //je retourne prods(les produits correspondant) et je l'affecte this.produits
  }
}
