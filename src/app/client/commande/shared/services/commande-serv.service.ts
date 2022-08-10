import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/securite/shared/services/token.service';
import { CommandeList } from '../models/commandeList';
import { Panier } from '../models/panier';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommandeServService {

  private urlCommandePost = 'http://127.0.0.1:8000/api/commandes'
  private urlCommandeGet = 'http://127.0.0.1:8000/api/clients/11/commandes'
  constructor(
    private http: HttpClient,
    private token : TokenService
    ) { }

  /* fonction d enregistrement d une commande */
  saveCommande(object:Panier){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    };
    console.log(httpOptions)
    return this.http.post(this.urlCommandePost,JSON.stringify(object),httpOptions)
  }

  /* commande d un client */
  commandeClient(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    };
    return this.http.get<any>(this.urlCommandeGet,httpOptions)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      )
    )
  }

}
