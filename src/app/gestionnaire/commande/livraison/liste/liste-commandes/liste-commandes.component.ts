import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/gestionnaire/shared/services/commande.service';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'ss-liste-commandes',
  templateUrl: './liste-commandes.component.html',
  styleUrls: ['./liste-commandes.component.css']
})
export class ListeCommandesComponent implements OnInit {
 
  com:any[]= []
  constructor(
    private comServ:CommandeService,
    private route: ActivatedRoute,
    private toast: NgToastService, 
  ) {}
  id:any
  ngOnInit(): void {
   this.id = this.route.snapshot.paramMap.get('id');
    this.comServ.commandeByLivraison(this.id).subscribe((data:any)=>{
        this.com = data;
    })
  }

  /* fonction changer etat commande */
  CommandetoEdit(id:any,etat:string){
    this.comServ.resetCommande(id,etat) .subscribe();
      this.toast.info({detail:"info",summary:"l etat de commande a bien été modifié"})
      location.reload()
  } 

}
