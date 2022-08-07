import { Component, OnInit } from '@angular/core';
import { Detail } from '../../produit/shared/models/detail';
import { CartServiceService } from '../../produit/shared/services/cart-service.service';
import { Panier } from '../shared/models/panier';

@Component({
  selector: 'ss-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  items:Detail[] = []
  newItems:Panier={}
  constructor(private cartServ:CartServiceService) { }

  ngOnInit(): void {
    // this.cartServ.cartItems.subscribe(data=>{
    //   this.items = data
    // })
    this.cartServ.newCart.subscribe(data=>{
      this.newItems = data
    })
  }

  onDelete(i:number){
    this.items.splice(i, 1)
    this.cartServ.setCartData(this.items)
  }

}
