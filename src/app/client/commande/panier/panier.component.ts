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

  constructor(private cartServ:CartServiceService) { }
    montant = 0
  ngOnInit(): void {
    // this.cartServ.cartItems.subscribe(data=>{
    //   this.items = data
    // })
    this.cartServ.newCart.subscribe(data=>{
      this.newItems = data
      if(data.burgerCommandes && data.menuCommandes)
      this.items = [...data.burgerCommandes,...data.menuCommandes]
       this.montant = this.cartServ.getTotalPrice() 
     
    })
  }
  delete(object: any){  
    this.cartServ.removeCart(object)
  }

  newObject = {}
  onDelete(event : any){
    alert(event.nom)
    this.newObject = event
    this.cartServ.removeCart(event)

  }

  validateInput(event : any,i:number){
    const qty = event.target.value
    this.QtyUpdated(qty,i)
  }
  private QtyUpdated(qty:number,i:number){
    this.items[i].quantite = qty
  }
}
