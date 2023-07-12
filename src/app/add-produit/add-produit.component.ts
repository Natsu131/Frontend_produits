import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css'],
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();
  categories!: Categorie[];
  newIdCat!: number;
  newCategorie!: Categorie;

  message?: string;

  constructor(private produitService: ProduitService, private router: Router) {}

  ngOnInit(): void {
    //cats c'est la liste des catégories, je l'affecte la méthode this.categorie qui va être retourner tous les produits
    this.produitService.listeCategories().subscribe((cats) => {
      this.categories = cats._embedded.categories;
      console.log(cats);
    });
  }

  //Prise en charge de la catégorie choisie par l'utilisateur
  addProduit() {
    //Recherche la catégorie choisie dans le tableau, puis l'affecter du nouveau produit (newProduit)
    this.newProduit.categorie = this.categories.find(
      (cat) => cat.idCat == this.newIdCat
    )!;
    //Appeld de la méthode ajouterProduit, qui va ajouter le produit dans la bdd
    this.produitService.ajouterProduit(this.newProduit).subscribe((prod) => {
      console.log(prod);
      this.router.navigate(['produits']); //Retourne à la page produits pour consulter le nouveau produit ajouté
    });
  }

  // addProduit(){
  //   console.log(this.newIdcat);
  //   this.newCategorie = this.produitService.consulterCategorie(this.newIdcat); //Retourne un objet de type Categorie
  //   this.newProduit.categorie = this.newCategorie;
  //   this.produitService.ajouterProduit(this.newProduit);
  //   this.message = "Produit " + this.newProduit.nomProduit + " ajouté avec succès !";
  //   this.router.navigate(['produits']);

  // }
}
