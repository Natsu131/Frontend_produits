import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-liste-categories',
  templateUrl: './liste-categories.component.html',
  styleUrls: ['./liste-categories.component.css']
})

export class ListeCategoriesComponent implements OnInit {

  categories! : Categorie[];

  updatedCat:Categorie = {"idCat":0,"nomCat":""}; // objet de type catégorie que j'initialise avec un idCat:0 et un nomCat vide

  constructor(private produitService : ProduitService) { }


  //Affichage de la liste de catégories à au lancement du composant
  ngOnInit(): void {

      this.chargerCategories();
  }

  chargerCategories(){
    this.produitService.listeCategories().
    subscribe(cats => {this.categories = cats._embedded.categories; //j'affecte au champs catégories ma liste de catégorie (je remplis le tableau)
    console.log("Charger catégories",cats);
    });
  }

  categorieUpdated(cat:Categorie){
    this.produitService.ajouterCategorie(cat).
    subscribe( ()=> this.chargerCategories()); // La methode chargerProduit permet de charger les produits dans le tableau après l'ajout dans la base de données
  };

  updateCat(cat: Categorie){
    this.updatedCat = cat;
  }
}
