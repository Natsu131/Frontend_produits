import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

const routes: Routes = [
  { path: 'produits', component: ProduitsComponent },
  { path: 'add-produit', component: AddProduitComponent },
  { path: 'updateProduit/:id', component: UpdateProduitComponent },
  {path: 'rechercheParCategorie', component: RechercheParCategorieComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  { path: '', redirectTo: 'produits', pathMatch: 'full' }, // Affichage d'un composant par défaut. reddirecto rédirige vers le chemin produit lorsqu'on revient sur la racine de l'url projet pour afficher le composant produit
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
