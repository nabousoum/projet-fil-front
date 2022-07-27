import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogue } from '../shared/models/catalogue';
import { CatalogueStoreService } from '../shared/services/catalogue-store.service';

@Component({
  selector: 'ss-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  activeTab = 'search';

  search(activeTab:any){
    this.activeTab = activeTab;
  }

  result(activeTab:any){
    this.activeTab = activeTab;
  }
  result2(activeTab:any){
    this.activeTab = activeTab;
  }
  catalogues$ : Observable<Catalogue> | null = null;
  burgers$ : Observable<Catalogue> | null = null;
  menus$ : Observable<Catalogue> | null = null;
  //  catalogues: Catalogue |null = null;
  constructor(private serv:CatalogueStoreService) { }

  ngOnInit(): void {
    this.catalogues$ = this.serv.all();
    this.burgers$ = this.serv.burgers();
    this.menus$ = this.serv.menus();
  }
}
