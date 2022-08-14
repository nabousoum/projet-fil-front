import { Component, OnInit } from '@angular/core';
import { Detail } from '../../produit/shared/models/detail';
import { CartServiceService } from '../../produit/shared/services/cart-service.service';
import { BurgerCommande, Panier } from '../shared/models/panier';
import { NgToastService } from 'ng-angular-popup';
import { TokenService } from 'src/app/securite/shared/services/token.service';
import { CommandeServService } from '../shared/services/commande-serv.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'ss-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  //items:Detail[] = []
  newItems:Panier={}
  items:any = []
  zones:any = []
  registerForm:any

  constructor(
    private cartServ:CartServiceService,
    private toast: NgToastService,
    private tokenService:TokenService,
    private commandeServ: CommandeServService,
    private router:Router
    ) { }
    montant = 0
  ngOnInit(): void {
    
    this.commandeServ.allZones().subscribe(data=>{
      console.log(data)
        this.zones = data
    })
    this.cartServ.newCart.subscribe(data=>{  
      this.newItems = data
      if(data.burgerCommandes && data.menuCommandes && data.boissonCommandes && data.friteCommandes)
      this.items = [...data.burgerCommandes,...data.menuCommandes,...data.boissonCommandes,...data.friteCommandes]
       this.montant = this.cartServ.getTotalPrice() 
     
    })
    this.registerForm = new FormGroup({
      "zone":new FormControl(null,[Validators.required]),
    })
  }
  delete(object: any){  
    this.cartServ.removeCart(object)
  }

  newObject = {}
  onDelete(event : any){
    //alert(event.nom)
    this.newObject = event
    this.cartServ.removeCart(event)
    this.toast.info({detail:"info",summary:"l' element a bien été supprimé"})

  }

  /* fonction de validation de commande */
  validerCommande(){
    if (this.tokenService.isLogged()){
        let zone={
          id:this.registerForm.get('zone').value
        }
        this.cartServ.newCart.value.zone = zone
        console.log( this.cartServ.newCart.value)
        this.commandeServ.saveCommande(this.cartServ.newCart.value).subscribe(
          err=> console.log(err),
        )
        this.cartServ.removeAllCart()
        this.toast.success({detail:"success",summary:"votre commande a bien été enregistré"})
    }
    else{
      this.router.navigate(['/securite/login'])
    }
  }

  /* form select */ 
  submitData(){
    console.log(this.registerForm.zone.value)
  }
  get zone(){
    return this.registerForm.get('zone')
  }
}
