import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

//Ce produit peut être injecté dans d'autres class
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits : Produit []; //un tableau de produit
  //Utiliser le « Data Binding » pour afficher la liste des produits
  //Je déclare un tableau de string


  produit! : Produit;
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

    //Ley produit passé en paramètre va être ajouter au tableau produit
    ajouterProduit(produit : Produit){
      this.produits.push(produit);
    }

    supprimerProduit(prod: Produit){
      const index = this.produits.indexOf(prod, 0); // Je cherce la position de l'index du produit en question passer en paramètre. Sa posituon sera stocké dans index
      if(index > -1){
        this.produits.splice(index,1); //Si index est supérieur à -1, ça veut qu'il a trouvé le produit. La méthode splice va supprimer le produit (1 seul)
      }
    }

    consulterProduit(id:number): Produit{
       return this.produits.find(p => p.idProduit == id)!; // find va chercher dans le tableau le produit dont l'id est égale à l'id passé  en parmètre. Si elle le trouve, elle va e mettre dans la variable this.produit
    }

    updateProduit(p:Produit){
      this.supprimerProduit(p);
      this.ajouterProduit(p);
      this.trierProduits();


    }
    //Trie les id des produits
    trierProduits(){
      this.produits = this.produits.sort((n1,n2) => {
      if (n1.idProduit > n2.idProduit) {
      return 1;
      }
      if (n1.idProduit < n2.idProduit) {
      return -1;
        }
      return 0;
        });
     }
}
