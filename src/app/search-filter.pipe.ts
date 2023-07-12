import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {


  /**Reçoit 2 paramètres : un tableau de n'importe quel type / filterText de type string (la chaine recherche)*/
  transform(list: any[], filterText: string): any {
    return list ? list.filter(item =>  // test si la liste n'est pas vide, si c'est bon, elle lance un filtre sur l'objet list
    item.nomProduit.toLowerCase().includes(filterText)) : []; //On voit si on converti le nom du produit en miniscule  et on test s'il contient le pramètre (filterText). Si filterText est null, elle renvoie un tableaau vide
  }

}
