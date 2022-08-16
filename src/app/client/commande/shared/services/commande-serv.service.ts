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
  private urlCommandeGet = 'http://127.0.0.1:8000/api/clients'
  private urlZone = 'http://127.0.0.1:8000/api/zones'
  private urlPutCommande = 'http://127.0.0.1:8000/api/commandes'

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
    //console.log(httpOptions)
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
    return this.http.get<any>((`${this.urlCommandeGet}/${this.token.getId()}/commandes`),httpOptions)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      )
    )
  }
    /* all zones */
  allZones(){
    return this.http.get<any>(this.urlZone)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      ))
  }

  /* annuler commande */
  resetCommande (id:any):Observable<number>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    }
    const body = {"etat": "annule"}
    return this.http.put<number>(this.urlPutCommande+"/"+id,body,httpOptions);
  }
}
