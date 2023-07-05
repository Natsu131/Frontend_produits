import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {


  produits : Produit [];
  //Injection du service

  constructor(private prodduitService : ProduitService){
  //Je rempli mon tableau produits avec la liseProduits déclarer dans le service
  this.produits = prodduitService.listeProduits();

  }

  ngOnInit(): void {

  }
}

