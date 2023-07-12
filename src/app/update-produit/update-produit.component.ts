import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css'],
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new Produit();
  categories!: Categorie[];
  updatedCatId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.produitService.listeCategories().subscribe((cats) => {
      this.categories = cats._embedded.categories;
      console.log(cats);
    });
    this.produitService
      .consulterProduit(this.activatedRoute.snapshot.params['id'])
      .subscribe((prod) => {
        this.currentProduit = prod; //currentProduit contient la caégorie du produit que je veux modifier
        this.updatedCatId = this.currentProduit.categorie.idCat; //Cette ligne permet de récupérer l'id du produit à modifier et le retourne dans la page de modif (affiche)
      });
    console.log(this.activatedRoute.snapshot.params['id']); // dans la console, en déroulant on trouve l'objet snapshot avec le tableau params
    //this.categories = this.produitService.listerCategories();// Je remplis le tableau avec toutes les catégories dispo
    //this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']); // Lorsque j'ai consulter le produit, j'ai pris l'id de sa catégorie puis je l'ai affecter à updatedCatId
    this.updatedCatId = this.currentProduit.categorie.idCat; // Contient l'Id du produit que je vais modifier - Je l'ai relié avec la liste de telle façon que la liste contien toujours la catégorie du produit à modifier
    console.log(this.currentProduit);

    this.produitService
      .consulterProduit(this.activatedRoute.snapshot.params['id'])
      .subscribe((prod) => {
        this.currentProduit = prod;
      });
  }

  updateProduit() {
    //Chargement et affectation de la catégoi choisi dans le select. Ce processus se fait avant l'update juste en dessous
    this.currentProduit.categorie = this.categories.find(
      (cat) => cat.idCat == this.updatedCatId
    )!; // CurrentProduit va contenir le nouveau produit modifier
    this.produitService.updateProduit(this.currentProduit).subscribe((prod) => {
      this.router.navigate(['produits']); // Je reviens sur la page de liste produits
    });
  }
}
