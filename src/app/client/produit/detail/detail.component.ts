import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Detail } from '../shared/models/detail';
import { Produit } from '../shared/models/produit';
import { CartServiceService } from '../shared/services/cart-service.service';
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

  constructor(
    private serv:CatalogueStoreService,
    private route: ActivatedRoute,
    private evtSvc: EventService,
    private cartServ: CartServiceService,
    ) {
    
   }

   /* controle taille */
  qteMenu: number = 1;
  countEmit(value :number){
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
  size:number = 1
  obj(event :any){
    this.size= event
  }

  /* algorithme de controle des tailles du menu */
  message = ""
  message2 = ""
  textBool = false
  parentControl(event :any){
    if(this.tab.length==0)
    {
        let object={
          idTaille:event.idTaille,
          qte:event.qte,
          boissons:[
            {
              idBoisson:event.boissonTaille.idBoisson,
               size:this.size,
               stock:event.boissonTaille.stock
            }
          ]
        }
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
          qte:event.qte,
          boissons:[
            {
              idBoisson:event.boissonTaille.idBoisson,
               size:this.size,
               stock:event.boissonTaille.stock
            }
          ]
        }
        this.tab.push(object);
      }
      else{
      
        this.tab.map(
          data=>{
            if(data.idTaille==event.idTaille){
              let boissonsTab =
              {
                idBoisson:event.boissonTaille.idBoisson,
                size:this.size,
                stock:event.boissonTaille.stock
              }
              let tabBoisson:any[] = data.boissons
              let testBool = false
              tabBoisson.map(
                (bois,index)=>{
                  if(bois.idBoisson == event.boissonTaille.idBoisson){
                    testBool = true
                    data.boissons[index] = boissonsTab 
                  }
                }
              )
              if(testBool==false){
                data.boissons.push(boissonsTab)
              }
            }
          }
        )
      }
    }
    //console.log(this.tab)
    this.textAlert(this.tab)
  }

  textAlert(tab :any[]):string{
    let totalSize = 0
      tab.forEach(element => {
      let tabBoissons:any[] = element.boissons
      tabBoissons.forEach(elem=>{
        totalSize+=elem.size
        if(totalSize > element.qte){
          this.message = "vous avez depasser le nombre de boissons"
          this.disabled_attr = true
        }
        else if(elem.size > elem.stock){
          this.message = "le stock est epuisé"
          this.disabled_attr = true
        }
        else{
          this.message = ""
          this.disabled_attr = false
        }
      })
    });
    return ""
  }

  parentControl2(event : any){
    if(this.tab.length==0){
      let obj2={
        idBoisson:event.idBoisson,
        size:this.size,
        stock:event.stock
      }
      this.tab.push(obj2)
    }
    else{
      var trouve=false
      this.tab.map(
        data=>{
          if(data.idBoisson==event.idBoisson){
            trouve=true
          }
        }
      )
      if(trouve == false){
        let obj2={
          idBoisson:event.idBoisson,
          size:this.size,
          stock:event.stock
        }
        this.tab.push(obj2)
      }
      else{
        this.tab.map(data=>{
          data.size = event.size 
        })
      }
    }
    console.log(this.tab)
    this.textAlert2(this.tab)
  }

  textAlert2(tab:any[]){
    tab.forEach(element=>{
      if(element.size > element.stock){
          this.message2 = "stock epuisé"
          this.disabled_attr = true
      }
      else{
        this.message2=""
        this.disabled_attr = false
      }
    })
  }

  /*add to cart function*/
  addToCart(detail:Detail){
     this.cartServ.addItems(detail)
  }
}
