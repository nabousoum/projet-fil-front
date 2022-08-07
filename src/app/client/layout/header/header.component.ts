import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../produit/shared/services/cart-service.service';

@Component({
  selector: 'ss-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  itemIncCart:number =0
  constructor(private cartService:CartServiceService) { }

  ngOnInit(): void {
    this.cartService.numOfItems.subscribe(d=>{
      this.itemIncCart = d.length
    })
  }

}
