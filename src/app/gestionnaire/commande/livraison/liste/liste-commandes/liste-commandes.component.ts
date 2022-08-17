import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/gestionnaire/shared/services/commande.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ss-liste-commandes',
  templateUrl: './liste-commandes.component.html',
  styleUrls: ['./liste-commandes.component.css']
})
export class ListeCommandesComponent implements OnInit {
 
  commandes:any[]= []
  constructor(
    private comServ:CommandeService,
    private route: ActivatedRoute,
  ) {}
  id:any
  ngOnInit(): void {
   this.id = this.route.snapshot.paramMap.get('id');
    this.comServ.commandeByLivraison(this.id).subscribe((data:any)=>{
        this.commandes = data;
    })
  }

}
