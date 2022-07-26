import { PipeTransform,Pipe } from "@angular/core";
import { CommandeList } from "src/app/client/commande/shared/models/commandeList";
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

@Pipe({
    name:'CommandeDateFilter'
})
export class CommandeDateFilter implements PipeTransform{
    transform(commandes: CommandeList[], searchTermDate: any) {
        if(!commandes || !searchTermDate){
            return commandes
        }
        return commandes.filter((commande:any) => {
            const date = new Date(commande.dateCommande)
            return date.toLocaleDateString() == new Date(searchTermDate).toLocaleDateString()
        });
    }
}
@Pipe({
    name:'CommandeZoneFilter'
})
export class CommandeZoneFilter implements PipeTransform{
    transform(commandes: CommandeList[], searchTermZone: string) {
        if(!commandes || !searchTermZone){
            return commandes
        }
        return commandes.filter(commande => commande.zone?.libelle?.toLowerCase().indexOf(searchTermZone.toLowerCase()) !== -1);
    }
}

@Pipe({
    name:'CommandeCLientFilter'
})
export class CommandeCLientFilter implements PipeTransform{
    transform(commandes: CommandeList[], searchTermClient: string) {
        if(!commandes || !searchTermClient){
            return commandes
        }
        return commandes.filter(commande => commande.client?.prenom?.toLowerCase().indexOf(searchTermClient.toLowerCase()) !== -1);
    }
}