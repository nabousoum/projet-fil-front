import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/gestionnaire/shared/services/commande.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'ss-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  livraisons:any[] = []
  constructor(
    private comServ:CommandeService,
    private toast: NgToastService, 
    ) { }

  ngOnInit(): void {
    this.comServ.allLivraisons().subscribe(data=>{
      this.livraisons = data
      //.filter((livraison:any)=>livraison.etat=='en cours')
    })
  }

   /* fonction changer etat commande */
   CommandetoEdit(id:any,etat:string){
    this.comServ.validerLivraison(id,etat) .subscribe(
      data=>{
        console.log(data);
        location.reload()
      }
    );
      
      this.toast.info({detail:"info",summary:"l etat de la livraison a bien été modifié"})
  } 

}
