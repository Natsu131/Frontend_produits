import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';

const routes: Routes = [
  {path: "produits", component : ProduitsComponent},
  {path: "add-produit", component : AddProduitComponent},
  { path: "", redirectTo: "produits", pathMatch: "full" } // Affichage d'un composant par défaut. reddirecto rédirige vers le chemin produit lorsqu'on revient sur la racine de l'url projet pour afficher le composant produit

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
