import { BoissonTailleBoisson } from "src/app/client/produit/shared/models/detail"
import { Produit } from "src/app/client/produit/shared/models/produit"

export interface Panier{
    burgerCommandes?: BurgerCommande[]
    menuCommandes?: MenuCommande[]
    boissonCommandes?: BoissonCommande[]
    friteCommandes?: FriteCommande[]
}

/* BurgerCommande */
export interface BurgerCommande{
    quantite: number
    burger?: Produit
}

/* MenuCommande */

export interface MenuCommande{
    quantite?: number
    menu?:Menu
}

export interface Menu{
    id?: number
    commandeMenuBoissonTailles?: CommandeMenuBoissonTaille[]
}

export interface CommandeMenuBoissonTaille{
    quantite?: number
    boissonTailles?: BoissonTailleBoisson
}


/* BoissonCommande */

export interface BoissonCommande{
    quantite?: number
    boissonTailleBoisson?: BoissonTailleBoisson
}

/* FriteCommande */

export interface FriteCommande{
    quantite?: number
    portionFrite?: Produit
}
