import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../shared/services/commande.service';

@Component({
  selector: 'ss-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent implements OnInit {

  totalLenght:number = 0
  p: number = 1
  
  commandes : any[] = []

  searchTerm:any
  searchTermDate:any

  constructor(
    private comServ:CommandeService
  ) { }

  ngOnInit(): void {
    this.comServ.allCommande().subscribe(data=>{
      console.log(Date.now());
      this.commandes = data
      this.totalLenght = this.commandes.length
    })
  }

}
