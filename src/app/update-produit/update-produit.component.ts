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

  constructor(private activateRoute : ActivatedRoute,
              private produitService: ProduitService,
              private router : Router) {}


  ngOnInit(): void {
   // console.log(this.activateRoute.snapshot.params['id']); // dans la console, en déroulant on trouve l'objet snapshot avec le tableau params
    this.categories = this.produitService.listerCategories ();// Je remplis le tableau avec toutes les catégories dispo
    this.currentProduit = this.produitService.consulterProduit(this.activateRoute.snapshot.params['id']); // Lorsque j'ai consulter le produit, j'ai pris l'id de sa catégorie puis je l'ai affecter à updatedCatId
    this.updatedCatId = this.currentProduit.categorie.idCat; // Contient l'Id du produit que je vais modifier - Je l'ai relié avec la liste de telle façon que la liste contien toujours la catégorie du produit à modifier
   // console.log(this.currentProduit);
  }

  updateProduit(){
    this.currentProduit.categorie = this.produitService.consulterCategorie(this.updatedCatId); /**Donc pour cela, je vais consulter la catégorie en passant le Lady de la catégorie choisie.
    Cette méthode va nous retourner un objet de type.
    Voila c'est quand je clique dessus, ça va nous redonner un objet de type catégorie et cet objet là,
    je vais l'affecter à la catégorie du produit que je veux modifier */
    
    this.produitService.updateProduit(this.currentProduit); // J'appelle ma méthode updateProduit avec son paramètre currentProduit
    this.router.navigate(["produits"]); // Retour sur la page produit après modification. Il va chercher la route dans app-routing, là où il trouve produit
  }
}
