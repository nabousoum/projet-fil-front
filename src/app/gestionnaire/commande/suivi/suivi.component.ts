import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../shared/services/commande.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'ss-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent implements OnInit {

  totalLenght:any
  p: number = 1
  
  commandes : any[] = []

  etat:string=""

  searchTerm = "en cours"
  searchTermDate = ''
  //new Date().toLocaleDateString()
  searchTermZone:any
  searchTermClient:any

  constructor(
    private comServ:CommandeService,
    private toast: NgToastService, 
  ) { }

  ngOnInit(): void {
    this.comServ.allCommande().subscribe(data=>{
      this.commandes = data
      //.filter((commande:any) => commande.etat="en cours")
      this.totalLenght = this.commandes.length
      //console.log(this.totalLenght);
    })
  }

    /* fonction changer etat commande */
    CommandetoEdit(id:any,etat:string){
      this.comServ.resetCommande(id,etat) .subscribe();
        this.toast.info({detail:"info",summary:"le commande a bien été modifié"})
        location.reload()
    } 
}
