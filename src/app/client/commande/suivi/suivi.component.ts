import { Component, OnInit } from '@angular/core';
import { CommandeList } from '../shared/models/commandeList';
import { CommandeServService } from '../shared/services/commande-serv.service';
import { Observable } from 'rxjs';
import { catchError, tap, filter,map } from 'rxjs/operators';
import { TokenService } from 'src/app/securite/shared/services/token.service';

@Component({
  selector: 'ss-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent implements OnInit {

  totalLenght:number = 0
  p: number = 1

  commandes$ : Observable<CommandeList> | any = null
  commandes:any[] = []

  searchTerm:any
  searchTermDate:any
  
  constructor(
    private token: TokenService,
    private comServ:CommandeServService
  ) { }

  ngOnInit(): void {
    this.comServ.commandeClient().subscribe(data => {
      this.commandes = data
      this.totalLenght = this.commandes.length
      return data
    })
  }

}
