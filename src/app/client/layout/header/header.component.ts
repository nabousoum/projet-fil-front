import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../produit/shared/services/cart-service.service';

@Component({
  selector: 'ss-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  itemIncCart:number = 0
  constructor(private cartService:CartServiceService) { }

  countPanier:number = 0
  ngOnInit(): void {
    this.cartService.newCart.subscribe(d=>{
      if(d.menuCommandes && d.boissonCommandes && d.burgerCommandes && d.friteCommandes){
        this.countPanier = d.boissonCommandes.length + d.burgerCommandes.length + d.friteCommandes.length + d.menuCommandes.length
      }
      this.itemIncCart = this.countPanier
    })
  }

}
