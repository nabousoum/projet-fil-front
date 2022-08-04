import { Component, Input, OnInit, Output } from '@angular/core';
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

  /* declarations de variables */
  qte = 0
  bool = 0
  disabled_attr = false
  tab :any[] = []
  private id :any = 0;
  private type:any =""
  quantiteClient = 0
  produit$ : Observable<Detail> | null = null;

  /* evenement de desactivation du bouton */
  disabledButton(event: any) {
      this.disabled_attr =  event 
  }

  /* nav tabs */
  activeTab = 'search';
  search(activeTab:any){
    this.activeTab = activeTab;
  }
  result(activeTab:any){
    this.activeTab = activeTab;
  }

  constructor(private serv:CatalogueStoreService,private route: ActivatedRoute,private evtSvc: EventService) {
    
   }

   /* controle taille */
  qteMenu: number = 1;
  tailleControle(value :number){
    this.qteMenu = value
  }


  ngOnInit(): void {
    this.evtSvc.childEventListner().subscribe(qte =>{
      this.quantiteClient += qte 
   })
    this.id = this.route.snapshot.paramMap.get('id');
    this.type = this.route.snapshot.paramMap.get('type');
    this.produit$ = this.serv.produit$(this.id);
  }
  /* recuperation du size  */
  size:number = 0
  obj(event :any){
    this.size= event
  }

  /* algorithme de controle des tailles du menu */
  parentControl(event :any){
    if(this.tab.length==0)
    {
        //this.tab.push(event);
        let object={
          idTaille:event.idTaille,
          qteClient:event.qteClient,
          boissons:[
            {
              idBoisson:event.boissonTaille.idBoisson,
               size:this.size
            }
          ]
        }
        // console.log(object)
        this.tab.push(object);
    }
    else{
      var trouve=false
      this.tab.map(
        data=>{
          if(data.idTaille==event.idTaille){
            trouve=true
          }
        }
      )
      if(trouve == false){
        let object={
          idTaille:event.idTaille,
          qteClient:event.qteClient,
          boissons:[
            {
              idBoisson:event.boissonTaille.idBoisson,
               size:this.size
            }
          ]
        }
        this.tab.push(object);
      } 
    }
    console.log(this.tab)
    console.log(this.size)

  }
 
}
