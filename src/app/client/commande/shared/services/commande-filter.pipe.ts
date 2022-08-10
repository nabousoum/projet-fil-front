import { PipeTransform,Pipe } from "@angular/core";
import { CommandeList } from "../models/commandeList";

@Pipe({
    name:'commandeFilter'
})

export class CommandeFilter implements PipeTransform{
    transform(commandes: CommandeList[], searchTerm: string) {
        if(!commandes || !searchTerm){
            return commandes
        }
        return commandes.filter(commande => commande.etat?.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}