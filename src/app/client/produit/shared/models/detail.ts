import { MenuBurger } from "./menuBurger"
import { MenuPortion } from "./menuPortion"
import { Produit } from "./produit"
export interface Detail{
    id?:number
    menu?:Menu
    burger?:Menu
    portionFrites?:Produit[]
    tailleBoissons?:TailleBoisson[]
}
export interface Menu{
    id?:number
    nom?:string
    prix?:number
    etat?:string
    description?:string
    type?:string
    image?:Blob
    catalogue?:string
    menuBurgers?:MenuBurger[]
    menuPortionFrites?:MenuPortion[]
    menuTailleBoissons?:MenuTailleBoisson[]
}
export interface TailleBoisson{
    stock?:number
    boisson?:Produit
}

export interface MenuTailleBoisson{
    quantite?:number
    tailleBoisson?:TailleBoissonMenu[]
}
export interface TailleBoissonMenu{
    id?:number
    prix?:number
    libelle?:string
    boissonTailleBoissons?:BoissonTailleBoisson[]
}
export interface BoissonTailleBoisson{
    id?:number
    stock?:string
    boisson?: Produit
}