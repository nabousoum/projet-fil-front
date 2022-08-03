import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Detail } from '../shared/models/detail';
import { Produit } from '../shared/models/produit';
import { CatalogueStoreService } from '../shared/services/catalogue-store.service';
import { EventService } from '../shared/services/event.service';

@Component({
  selector: 'ss-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  qte = 0;

  disabled_attr = false
  disabledButton(event: any) {
      this.disabled_attr =  event 
  }
  activeTab = 'search';

  search(activeTab:any){
    this.activeTab = activeTab;
  }

  result(activeTab:any){
    this.activeTab = activeTab;
  }
  produit$ : Observable<Detail> | null = null;
  //  catalogues: Catalogue |null = null;
  constructor(private serv:CatalogueStoreService,private route: ActivatedRoute,private evtSvc: EventService) {
    
   }
  
  private id :any = 0;
  private type:any =""
  quantiteClient = 0
  ngOnInit(): void {
    this.evtSvc.childEventListner().subscribe(qte =>{
      this.quantiteClient += qte 
   })
    this.id = this.route.snapshot.paramMap.get('id');
    this.type = this.route.snapshot.paramMap.get('type');
    this.produit$ = this.serv.produit$(this.id);
  }
}
