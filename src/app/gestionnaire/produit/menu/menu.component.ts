import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/client/produit/shared/models/produit';
import { CatalogueStoreService } from 'src/app/client/produit/shared/services/catalogue-store.service';
import { ProduitService } from '../../shared/services/produit.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/securite/shared/services/token.service';
@Component({
  selector: 'ss-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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
      this.catas = data.produits?.filter(product => product.type === 'menu')
      this.totalLenght = this.catas.length
    })
  }

  /* edit menu */
  MenutoEdit(id:string){
    this.produitService.menuDelete(id) .subscribe();
    this.toast.info({detail:"info",summary:"le menu a bien été supprimé"})
    location.reload()
  }


}
