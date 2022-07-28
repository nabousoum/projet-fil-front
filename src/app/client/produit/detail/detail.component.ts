import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Detail } from '../shared/models/detail';
import { Produit } from '../shared/models/produit';
import { CatalogueStoreService } from '../shared/services/catalogue-store.service';

@Component({
  selector: 'ss-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  activeTab = 'search';

  search(activeTab:any){
    this.activeTab = activeTab;
  }

  result(activeTab:any){
    this.activeTab = activeTab;
  }

  produit$ : Observable<Detail> | null = null;
  //  catalogues: Catalogue |null = null;
  constructor(private serv:CatalogueStoreService) { }
  ngOnInit(): void {
    this.produit$ = this.serv.produit$();
  }
}
