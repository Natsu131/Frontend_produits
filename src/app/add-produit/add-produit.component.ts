import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})

export class AddProduitComponent implements OnInit{

  newProduit = new Produit();
  categories!: Categorie[];
  newIdcat! : number;
  newCategorie! : Categorie;


message? : string;

  constructor(private produitService : ProduitService,
    private router : Router){}

ngOnInit(): void {
    //On retourne toutes les catégories disponible pour l'ajouter au tableau catégories
  //this.categories = this.produitService.listerCategories()
  }
addProduit(){
    this.produitService.ajouterProduit(this.newProduit) //Appelle la méthode ajouter produit
      .subscribe(prod => {
      console.log(prod);
      this.router.navigate(['produits']); //Retourne à la liste des produits pour voir le nouveau produit ajouté
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
