import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Detail } from '../models/detail';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  placeholder = []
  cartItems:any[] = []
  numOfItems =  new BehaviorSubject<any>([]);

  constructor() { }
  
  addItems(product:Detail){
    const exist = this.cartItems.find((item)=>{
      return item.id === product.id
    })
    if(!exist){
      this.cartItems.push(product)
    }
    console.log(this.cartItems)
     this.numOfItems.next(this.cartItems)
  }
}
