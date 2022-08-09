import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BurgerCommande, CommandeMenuBoissonTaille, MenuCommande } from '../../commande/shared/models/panier';
import { BoissonTailleBoisson, Detail } from '../shared/models/detail';
import { Produit } from '../shared/models/produit';
import { CartServiceService } from '../shared/services/cart-service.service';
import { CatalogueStoreService } from '../shared/services/catalogue-store.service';
import { EventService } from '../shared/services/event.service';
import { NgToastService } from 'ng-angular-popup';
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
  commandeMenuBoissonTailles : CommandeMenuBoissonTaille[] = []


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
    private toast: NgToastService
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
               stock:event.boissonTaille.stock,
               idB:event.idB
            }
          ]
        }
        let commande={
          quantite: this.size,
          boissonTailles: {
            id:event.boissonTaille.idB
          }
        }
        this.commandeMenuBoissonTailles.push(commande)
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
               stock:event.boissonTaille.stock,
               idB:event.idB
            }
          ]
        }
        let commande={
          quantite: this.size,
          boissonTailles: {
            id:event.boissonTaille.idB
          }
        }
        this.commandeMenuBoissonTailles.push(commande)
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
              let commande={
                quantite: this.size,
                boissonTailles: {
                  id:event.boissonTaille.idB
                }
              }
              let tabBois = this.commandeMenuBoissonTailles
              let trouveCmd = false
              tabBois.map(bois=>{
                trouveCmd = true
                if(bois.boissonTailles?.id  == event.boissonTaille.idBoisson){
                  bois.quantite = event.quantite
                }
              })
              if(trouveCmd == false){
                this.commandeMenuBoissonTailles.push(commande)
              }
              
            }
          }
        )
      }
    }
   // console.log(this.tab)
    console.log(this.commandeMenuBoissonTailles)
    this.textAlert(this.tab)
  }

  textAlert(tab :any[]):string{
    let totalSize = 0
      tab.forEach(element => {
      let tabBoissons:any[] = element.boissons
      tabBoissons.forEach(elem=>{
        totalSize+=elem.size
        if(totalSize > element.qte){
          this.toast.error({detail:"ERROR",summary:"vous avez depasser le nombre de boissons"})
          //this.message = "vous avez depasser le nombre de boissons"
          this.disabled_attr = true
        }
        else if(elem.size > elem.stock){
          this.toast.error({detail:"ERROR",summary:"le stock est epuisé"})
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
        this.toast.error({detail:"ERROR",summary:"le stock est epuisé"})
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
    //console.log(detail.burger)
      if(detail.burger){
        let burger:BurgerCommande = {
          quantite:this.size,
          burger:detail.burger
        }
        this.cartServ.addBurger(burger)
        this.toast.success({detail:"success",summary:"le burger bien a été enregistré dans le panier"})
        console.log(this.cartServ.newCart.value)
      }
    if (detail.menu){ 
      let menu:MenuCommande = {
        quantite:this.size,
        menu:{
          id:Number(detail.menu.id),
          nom: detail.menu.nom,
          image:detail.menu.image,
          type:detail.menu.type,
          prix:detail.menu.prix,
          commandeMenuBoissonTailles: this.commandeMenuBoissonTailles
        }
      }
      this.cartServ.addMenu(menu)
      this.toast.success({detail:"success",summary:"le menu bien a été enregistré dans le panier"})
      console.log(this.cartServ.newCart.value)
    }
  }

}
