import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit{

  currentProduit = new Produit();

  constructor(private activateRoute : ActivatedRoute,
              private produitService: ProduitService,
              private router : Router) {}


  ngOnInit(): void {
    console.log(this.activateRoute.snapshot.params['id']); // dans la console, en déroulant on trouve l'objet snapshot avec le tableau params
    this.currentProduit = this.produitService.consulterProduit(this.activateRoute.snapshot.params['id']);
    console.log(this.currentProduit);
  }

  updateProduit(){
    //console.log(this.currentProduit);
    this.produitService.updateProduit(this.currentProduit); // J'appelle ma méthode updateProduit avec son paramètre currentProduit
    this.router.navigate(["produits"]); // Retour sur la page produit après modification. Il va chercher la route dans app-routing, là où il trouve produit
  }
}
