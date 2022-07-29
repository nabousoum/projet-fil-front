import { MenuBurger } from "./menuBurger"
import { MenuPortion } from "./menuPortion"
export interface Detail{
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
    menuTailleBoissons?:[]
}