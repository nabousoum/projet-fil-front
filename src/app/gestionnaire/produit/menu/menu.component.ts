import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/client/produit/shared/models/produit';
import { CatalogueStoreService } from 'src/app/client/produit/shared/services/catalogue-store.service';

@Component({
  selector: 'ss-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  totalLenght:number = 0
  p: number = 1
  catas: Produit[]| any = undefined;
  constructor(private serv:CatalogueStoreService) { }

  ngOnInit(): void {
    this.serv.all().subscribe(data => {
      console.log(data.produits);
      this.catas = data.produits?.filter(product => product.type === 'menu')
      this.totalLenght = this.catas.length
    })
  }

}
