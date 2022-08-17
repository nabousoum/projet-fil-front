import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/gestionnaire/shared/services/commande.service';

@Component({
  selector: 'ss-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  livraisons:any[] = []
  constructor(
    private comServ:CommandeService
    ) { }

  ngOnInit(): void {
    this.comServ.allLivraisons().subscribe(data=>{
      this.livraisons = data.filter((livraison:any)=>livraison.etat=='en cours')
    })
  }
  /* fonction des commandes par livraison */
  commandeByLivraison(id:any){
    
  }

}
