import { Component, OnInit } from '@angular/core';
import { Detail } from '../../produit/shared/models/detail';
import { CartServiceService } from '../../produit/shared/services/cart-service.service';
import { BurgerCommande, Panier } from '../shared/models/panier';

@Component({
  selector: 'ss-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  //items:Detail[] = []
  newItems:Panier={}
  items:any = []
  total:number =0
  constructor(private cartServ:CartServiceService) { }

  ngOnInit(): void {
    // this.cartServ.cartItems.subscribe(data=>{
    //   this.items = data
    // })
    this.cartServ.newCart.subscribe(data=>{
      this.newItems = data
      if(data.burgerCommandes && data.menuCommandes)
      this.items = [...data.burgerCommandes,...data.menuCommandes]
      if(this.items){
        this.getTotal(this.items)
      }
    })
  }
  // i:number = 0
  // onDelete(){
  //  alert(this.i)
  //   this.items.splice(this.i, 1)
  //   this.cartServ.setCartData(this.items)
  // }
  getTotal(data:any){
    let subs = 0
    for(const item of data){
      subs += 1000
    }
    this.total = subs
  }

}
