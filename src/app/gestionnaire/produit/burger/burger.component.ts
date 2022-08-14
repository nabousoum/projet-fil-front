import { Component, OnInit } from '@angular/core';
import { CatalogueStoreService } from 'src/app/client/produit/shared/services/catalogue-store.service';
import { ProduitService } from '../../shared/services/produit.service';
import { NgToastService } from 'ng-angular-popup';
import { Produit } from 'src/app/client/produit/shared/models/produit';
@Component({
  selector: 'ss-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {
  totalLenght:number = 0
  p: number = 1
  catas: Produit[]| any = undefined;
  constructor(
    private serv:CatalogueStoreService,
    private produitService:ProduitService,
    private toast: NgToastService, 
  ) { }

  ngOnInit(): void {
    this.serv.all().subscribe(data => {
      console.log(data.produits);
      this.catas = data.produits?.filter(product => product.type === 'burger')
      this.totalLenght = this.catas.length
    })
  }
  /* edit menu */
  BurgertoEdit(id:string){
    this.produitService.burgerDelete(id) .subscribe(
      
    );
      this.toast.info({detail:"info",summary:"le menu a bien été supprimé"})
}
}
