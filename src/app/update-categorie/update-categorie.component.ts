import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent  implements OnInit{

  @Input() // Paramètre du composant qui permet d'appeler ce composant dans le html, c'est la transmission de données en angular
  categorie! : Categorie;

  @Output()
  categorieUpdated = new EventEmitter<Categorie>(); /**Je retourne à mon composant ListeCategorie un objet de type EventEmitter qui est mise à jour
  (double fonction : ajouter et mettre à jour des nouvelles catégories)*/

  constructor() {}

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateCategorie ",this.categorie);
  }

  saveCategorie(){
    this.categorieUpdated.emit(this.categorie); //je vais emettre un objet de type catégorie
  }
}
