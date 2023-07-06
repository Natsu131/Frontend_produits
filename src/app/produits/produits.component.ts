import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {


  produits? : Produit [];
  //Injection du service

  constructor(private produitService : ProduitService){
        //Je rempli mon tableau produits avec la liseProduits déclarer dans le service

     this.produits = this.produitService.listeProduits();

  }

  ngOnInit(): void {


  }

  supprimerProduit(prod : Produit){
    //console.log(prod);
    let confirme = confirm("Etes-vous sûr");
    if(confirme){
      this.produitService.supprimerProduit(prod);
    }

  }

}

