import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap, filter,map } from 'rxjs/operators';
import { Catalogue } from '../shared/models/catalogue';
import { Produit } from '../shared/models/produit';
import { CatalogueStoreService } from '../shared/services/catalogue-store.service';

@Component({
  selector: 'ss-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

 
  catalogues$ : Observable<Catalogue> | null = null;
  catas: Produit[]| undefined = undefined;

  //  catalogues: Catalogue |null = null;
  constructor(private serv:CatalogueStoreService) { }

  ngOnInit(): void {
    this.serv.all().subscribe(data => {
      this.catas = data.produits
    })
  }
  filterProduct(type:string){
      this.serv.all().subscribe(data => {
        if(type!=""){
        this.catas = data.produits?.filter(product => product.type === type)
        }
        else{
          this.catas = data.produits
        }
      })
    
    
  }
}
