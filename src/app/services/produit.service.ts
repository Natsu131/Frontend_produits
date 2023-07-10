import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} ) // Permet de dire à angular que les données retournées seront du Json
};

//Ce produit peut être injecté dans d'autres class
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  apiURL: string = 'http://localhost:3000/produits/api'; //Liaison avec le backend

  produits! : Produit []; //un tableau de produit
  //Utiliser le « Data Binding » pour afficher la liste des produits
  //Je déclare un tableau de string
 // categories : Categorie[];

 // produit! : Produit;
  //Objet de produits

  //Injection de dépendance permettant de faire appel aux API grâce à la variable http  (ex:this.http.get...)
  constructor(private http : HttpClient) {

    // this.categories = [
    //   {idCat : 1, nomCat : "PC"},
    //   {idCat : 2, nomCat : "Téléphone"}
    // ]
    // this.produits = [
    //   {idProduit : 1, nomProduit : "PC MSI", prixProduit : 3000.600, dateCreation : new Date("06/14/2011"), categorie : {idCat: 1, nomCat: "PC"}},
    //   {idProduit : 2, nomProduit : "OnePlus 8", prixProduit : 600.99, dateCreation : new Date("08/11/2015"), categorie :{ idCat: 2, nomCat: "Téléphone"}},
    //   {idProduit : 3, nomProduit :"PC Asus", prixProduit : 900.123, dateCreation : new Date("09/12/2023"), categorie: {idCat: 1, nomCat:"Téléphone"}}

    // ];

  }

  // listeProduits(): Produit[]{
  //     return this.produits;
  //   }

  listeProduit(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.apiURL); //Retourne un tableau de produit sous format Json
    }

    //Ley produit passé en paramètre va être ajouter au tableau produit
    /*ajouterProduit(produit : Produit){
      this.produits.push(produit);
    }*/

    ajouterProduit( prod: Produit):Observable<Produit>{
      return this.http.post<Produit>(this.apiURL, prod, httpOptions); /* Retourne le produit ajouter (noter qu'avez les api rest on ne travaille qu'avec des observables)
      La méthode post permet d'ajouter avec les api rest. Dans corps de ma requête http, je vais transmettre un produit sous format Json. Je recupère le paramètre prod que je transmets dans le return.httpOptions
      veut dire que je transmets de données sous format Json (la constance déclarée plus haut)*/
    }

    supprimerProduit(id: number){
      const url = `${this.apiURL}/${id}`; // Prends comme paramètre l'id du produit que je souhaite supprimer. Je concataine l'url avec l'id du produit
      return this.http.delete(url, httpOptions);
    }

    consulterProduit(id: number): Observable<Produit> {
        const url = `${this.apiURL}/${id}`; //Je concataine l'url avec l'id du produit à modifier
        return this.http.get<Produit>(url); // Je retour le resultat de type produit et je construit la nouvelle url
    }

    //Modifier produit
    updateProduit(prod :Produit) : Observable<Produit>{
        return this.http.put<Produit>(this.apiURL, prod, httpOptions); //Apelle notre api rest qui est de type put. On passe comme paramètre un produit
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

     // Retour le tableau de catégories
    //  listerCategories():Categorie[]{
    //   return this.categories;
    //  }

     // La méthode find va chercher dans le tableau une catégorie et retourner un objet Json de type Categorie
    //  consulterCategorie(id:number): Categorie{
    //   return this.categories.find(cat => cat.idCat == id)!;
    //  }
}
