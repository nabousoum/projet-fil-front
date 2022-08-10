import { Component, OnInit } from '@angular/core';
import { CommandeList } from '../shared/models/commandeList';
import { CommandeServService } from '../shared/services/commande-serv.service';
import { Observable } from 'rxjs';
import { catchError, tap, filter,map } from 'rxjs/operators';

@Component({
  selector: 'ss-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent implements OnInit {
  commandes$ : Observable<CommandeList> | any = null;
  constructor(
    private comServ:CommandeServService
  ) { }

  ngOnInit(): void {
    this.comServ.commandeClient().subscribe(data => {
      console.log(data);
      this.commandes$ = this.comServ.commandeClient()
      return data
    })
  }

}
