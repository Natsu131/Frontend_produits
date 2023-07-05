import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

//Ce produit peut être injecter dans d'autres class
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits : Produit []; //un tableau de produit
  //Utiliser le « Data Binding » pour afficher la liste des produits
  //Je déclare un tableau de string


  //Objet de produits

  constructor() {
    this.produits = [
      {idProduit : 1, nomProduit : "PC MSI", prixProduit : 3000.600, dateCreation : new Date("06/14/2011")},
      {idProduit : 2, nomProduit : "OnePlus 8", prixProduit : 600.99, dateCreation : new Date("08/11/2015")},
      {idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("09/12/2023")}

    ];

  }

  listeProduits(): Produit[]{
      return this.produits;
    }

    //Lep produit passé en paramètre va être ajouter au tableau produit
    ajouterProduit(produit : Produit){
      this.produits.push(produit);
    }
}
