import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../shared/services/commande.service';

@Component({
  selector: 'ss-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.css']
})
export class LivreurComponent implements OnInit {
  livreurs:any[] = []
  constructor(
    private comServ:CommandeService
  ) { }

  ngOnInit(): void {
    this.comServ.allLivreurs().subscribe((data:any)=>{
      this.livreurs = data
    })
  }

}
