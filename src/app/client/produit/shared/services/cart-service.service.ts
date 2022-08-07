import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BurgerCommande, Panier } from 'src/app/client/commande/shared/models/panier';
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

  /* add burger */
  addBurger(burger:BurgerCommande){
    
     const ls = JSON.parse(localStorage.getItem('cart') || 'null')
    // console.log(ls)
    let newData = {
        ...this.newCart.value,
        burgerCommandes: this.newCart.value.burgerCommandes?.concat(burger)
    }
      localStorage.setItem('cart', JSON.stringify(newData))
      return this.newCart.next(newData)
  }

}