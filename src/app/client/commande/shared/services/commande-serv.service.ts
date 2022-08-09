import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/securite/shared/services/token.service';
import { Panier } from '../models/panier';

@Injectable({
  providedIn: 'root'
})
export class CommandeServService {
  private urlCommandePost = 'http://127.0.0.1:8000/api/commandes'
  constructor(
    private http: HttpClient,
    private token : TokenService
    ) { }

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

}
