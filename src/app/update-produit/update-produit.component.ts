import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit{

  currentProduit = new Produit();
  categories!: Categorie[];
  updatedCatId! : number;

  constructor(private activatedRoute : ActivatedRoute,
              private produitService: ProduitService,
              private router : Router) {}


  ngOnInit(): void {
   /*console.log(this.activateRoute.snapshot.params['id']); // dans la console, en déroulant on trouve l'objet snapshot avec le tableau params
    this.categories = this.produitService.listerCategories ();// Je remplis le tableau avec toutes les catégories dispo
    this.currentProduit = this.produitService.consulterProduit(this.activateRoute.snapshot.params['id']); // Lorsque j'ai consulter le produit, j'ai pris l'id de sa catégorie puis je l'ai affecter à updatedCatId
    this.updatedCatId = this.currentProduit.categorie.idCat; // Contient l'Id du produit que je vais modifier - Je l'ai relié avec la liste de telle façon que la liste contien toujours la catégorie du produit à modifier
    console.log(this.currentProduit);*/

    this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).subscribe( prod =>{ this.currentProduit = prod; } ) ;

  }


  updateProduit() {
    this.produitService.updateProduit(this.currentProduit).subscribe(prod => { // CurrentProduit va contenir le nouveau produit modifier
    this.router.navigate(['produits']); } // Je reviens sur la page de liste produits
    );
  }

}
