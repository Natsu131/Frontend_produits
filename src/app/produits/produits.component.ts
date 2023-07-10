import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {


  produits ?: Produit [];
  //Injection du service

  constructor(private produitService : ProduitService){
        //Je rempli mon tableau produits avec la liseProduits déclarer dans le service

    //this.produits = this.produitService.listeProduits();

  }

  //Je souscris à la méthode observable (listeProduit). prods est le nom d'une variable, e
  ngOnInit(): void {
    this.chargerProduits();

  }
  // J'ai crée cette méthode puis l'appel dans le ngOnInit parce que j'aurais besoin de recharger les produits après une suppression au niveau de la méthode supprimer
  chargerProduits(){
    this.produitService.listeProduit().subscribe(prods => {
    //console.log(prods);
    this.produits = prods; //Le tableau des produits que je vais affecter prods qui est le resultat de la méthode listeProduit
    });
  }

  supprimerProduit(p: Produit){
    let conf = confirm("Etes-vous sûr ?");
    if (conf){
      this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
        console.log("produit supprimé");
       this.chargerProduits(); // Je charge les produits pour voir le resultat de ma supression
       //this.router.navigate(['produits']);
      });
    }
  }
}

