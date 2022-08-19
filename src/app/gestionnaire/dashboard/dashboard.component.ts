import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../shared/services/commande.service';
import { ProduitService } from '../shared/services/produit.service';

@Component({
  selector: 'ss-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nbrProducts :number = 0;
  nbrUsers :number = 0;
  nbrComs:number = 0;
  recettes:number = 0;
  constructor(
    private produitService: ProduitService,
    private comServ:CommandeService,
  ) { }

  ngOnInit(): void {
    this.produitService.allProducts().subscribe(
      data=>{
       this.nbrProducts = data.length
      } 
    )
    this.produitService.allUsers().subscribe(
      data=>{
        this.nbrUsers = data.length
      }
    )
    this.comServ.allCommande().subscribe(
      data=>{
        this.nbrComs = data.length
      }
    )
    this.comServ.allCommande().subscribe(
      data=>{
       data.forEach((com:any) => {
            this.recettes += Number(com.montantCommande)
       });
         
      }
    )
  }

}
