import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private serv:CatalogueStoreService,private route: ActivatedRoute) {
    
   }
  private id :any = 0;
  private type:any =""
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.type = this.route.snapshot.paramMap.get('type');
    this.produit$ = this.serv.produit$(this.id);
  }
}
