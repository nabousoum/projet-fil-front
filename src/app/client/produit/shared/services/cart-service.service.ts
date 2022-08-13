import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BoissonCommande, BurgerCommande, FriteCommande, Menu, MenuCommande, Panier } from 'src/app/client/commande/shared/models/panier';
import { Detail } from '../models/detail';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private panier : Panier = {
    burgerCommandes: [],
    menuCommandes: [],
    boissonCommandes: [],
    friteCommandes: []
  }
  // placeholder:Produit[]= []
  // cartItems = new BehaviorSubject<any[]>([])
  newCart = new BehaviorSubject<Panier>(this.panier)
  //numOfItems =  new BehaviorSubject<any>([])

  constructor() { 
     const ls = JSON.parse(localStorage.getItem('cart') || 'null')
    if (ls) {
      this.newCart.next(ls)
    }
  }
  
  // addItems(product:Produit){
  //   const ls = this.getCartData()
    
  //   if (ls){
  //     try{
  //       const newData = [...ls,product]
  //       this.setCartData(newData)
  //       this.cartItems.next(this.getCartData())
  //     }
  //     catch(e){
  //       console.log("Local Storage is full, Please empty data");
  //     }
     
  //   }
  //     try{
  //       this.placeholder.push(product)
  //       this.setCartData(this.placeholder)
  //       this.cartItems.next(this.getCartData())
  //     }
  //     catch(e){
  //       console.log("Local Storage is full, Please empty data");
  //     }
  // }
  // setCartData(data:any){
  //       localStorage.setItem('cart', JSON.stringify(data))
  // }
  // getCartData(){
  //   return JSON.parse(localStorage.getItem('cart') || 'null')
  // }

  /* burger commande */
  addBurger(burger:BurgerCommande){
    var trouve=false
    this.newCart.value.burgerCommandes?.map(burgerCommande=>{
      if(burgerCommande.burger?.id == burger.burger?.id){
          trouve = true
          Number(burgerCommande.quantite += burger.quantite)
      }
    })
    if (!trouve){
      const ls = JSON.parse(localStorage.getItem('cart') || 'null')
      // console.log(ls)
      let newData = {
          ...this.newCart.value,
          burgerCommandes: this.newCart.value.burgerCommandes?.concat(burger)
      }
      // window.addEventListener('storage',()=>{

      // })
        localStorage.setItem('cart', JSON.stringify(newData))
        return this.newCart.next(newData)
    }
    else{
      const ls = JSON.parse(localStorage.getItem('cart') || 'null')
      // console.log(ls)
      let newData = {
          ...this.newCart.value,
          burgerCommandes: this.newCart.value.burgerCommandes
      }
        localStorage.setItem('cart', JSON.stringify(newData))
         this.newCart.next(newData)
    }
    
  }
  /* menu commande */
  addMenu(menuCommande:MenuCommande) {
    var trouve=false
    this.newCart.value.menuCommandes?.map(menuCom=>{
      if(menuCom.menu?.id == menuCommande.menu?.id){
          trouve = true
          Number(menuCom.quantite += menuCommande.quantite)
      }
    })
    if(!trouve){
      const ls = JSON.parse(localStorage.getItem('cart') || 'null')
      let newData = {
        ...this.newCart.value,
        menuCommandes: this.newCart.value.menuCommandes?.concat(menuCommande)
      }
      localStorage.setItem('cart', JSON.stringify(newData))
      return this.newCart.next(newData)
    }
    else{
       const ls = JSON.parse(localStorage.getItem('cart') || 'null')
       let newData = {
        ...this.newCart.value,
        menuCommandes: this.newCart.value.menuCommandes
      }
      localStorage.setItem('cart', JSON.stringify(newData))
      return this.newCart.next(newData)
    }
    
  }

  /* montant total panier */
  getTotalPrice(){
    let grandTotal = 0
    this.newCart.value.menuCommandes?.map(menuCom=>{
      if(menuCom?.menu?.prix)
      grandTotal += Number( menuCom?.menu?.prix * menuCom.quantite)
    })
    this.newCart.value.burgerCommandes?.map(burgerCommande=>{
      if(burgerCommande.burger?.prix)
      grandTotal += Number( burgerCommande?.burger?.prix * burgerCommande.quantite)
    })
    return grandTotal
  }

  /* suppression d un element du panier */
  removeCart(object:any){
    if(object.type == 'menu'){
      this.newCart.value.menuCommandes?.map((menuCom,index)=>{
        if(menuCom.menu?.id == object.id){
          this.newCart.value.menuCommandes?.splice(index,1)
      }
      })
      const ls = JSON.parse(localStorage.getItem('cart') || 'null')
      let newData = {
        ...this.newCart.value,
        menuCommandes: this.newCart.value.menuCommandes
      }
      localStorage.setItem('cart', JSON.stringify(newData))
      return this.newCart.next(newData)
    }
    if(object.type == 'burger'){
      this.newCart.value.burgerCommandes?.map((burgerCom,index)=>{
        if(burgerCom.burger?.id == object.id){
          this.newCart.value.burgerCommandes?.splice(index,1)
      }
      })
      const ls = JSON.parse(localStorage.getItem('cart') || 'null')

      let newData = {
          ...this.newCart.value,
          burgerCommandes: this.newCart.value.burgerCommandes
      }
        localStorage.setItem('cart', JSON.stringify(newData))
         this.newCart.next(newData)
      
    }
    return this.newCart.next
  }

  /* supprimer ts les elements du panier */
  removeAllCart(){
    localStorage.removeItem('cart');
    window.location.reload()
  }

  /* boisson commande */
  addBoisson(boissonCommande:BoissonCommande[]){
    // var trouve=false
    // this.newCart.value.boissonCommandes?.map(boissonCom=>{
    //   if(boissonCommande.boissonTailleBoisson.boisson.id == boissonCom.boissonTailleBoisson?.boisson.id){
    //       trouve = true
    //       Number(boissonCommande.quantite += boissonCom.quantite)
    //   }
    // })
      const ls = JSON.parse(localStorage.getItem('cart') || 'null')
      let newData = {
        ...this.newCart.value,
        boissonCommandes: this.newCart.value.boissonCommandes = [...boissonCommande]
      }
      localStorage.setItem('cart', JSON.stringify(newData))
      return this.newCart.next(newData)
  }

  /* frites commande */
  addFrite(friteCommande:FriteCommande){
    const ls = JSON.parse(localStorage.getItem('cart') || 'null')
      let newData = {
        ...this.newCart.value,
        friteCommandes: this.newCart.value.friteCommandes?.concat(friteCommande)
      }
      localStorage.setItem('cart', JSON.stringify(newData))
      return this.newCart.next(newData)
  }
}
