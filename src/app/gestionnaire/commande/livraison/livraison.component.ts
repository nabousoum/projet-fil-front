import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../shared/services/commande.service';

@Component({
  selector: 'ss-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {

  commandesZones :any[] = []
  livreurs: any[] = []

  panleExpanded = true;
  panleExpanded2 = true;
  panleExpanded3 = true;

  constructor(
    private comServ:CommandeService
  ) { }

  ngOnInit(): void {
    this.comServ.commandesByZone().subscribe(data=>{
      this.commandesZones = data.filter((commande:any) => commande.etat=="termine")
    })
    this.comServ.allLivreurs().subscribe(data=>{
      this.livreurs = data
    })
  }

}
