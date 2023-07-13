import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit{


  nomProduit!: string;
  produits!: Produit[];
  allProduits!: Produit[];
  searchTerm!: string;

  constructor(private produitService : ProduitService){
  }

  ngOnInit():void{
    /**Remplissage des produits ngonit va appeler listeProduits dans le produitService, qui va appeler l'api backend qui va emmener tous les produits */
    // this.produitService.listeProduit().subscribe(prods => {
    // console.log(prods);
    // this.allProduits = prods;
    // });
    /**Recherche avec les pipes */
    this.produitService.listeProduit().subscribe(prods => {
    this.produits = prods;
      console.log(prods);
    });
    this.rechercherProds();
  }

  /**RECHERCHE PAR NOM */

  rechercherProds(){
    this.produitService.rechercherParNom(this.nomProduit).subscribe(prods =>{
       console.log(prods);
       this.produits=prods;});
  }

    /**FILTRE PAR CARACTERE TAPER */
  onKeyUp(filterText : string){
    this.produits = this.produits.filter(item =>
    item.nomProduit.toLowerCase().includes(filterText));
  }

}


