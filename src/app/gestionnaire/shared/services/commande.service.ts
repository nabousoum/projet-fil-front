import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/securite/shared/services/token.service';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private urlAllCommande: string = 'http://127.0.0.1:8000/api/commandes'
  private urlCommandeZone: string = 'http://127.0.0.1:8000/api/zones'
  private urlLivreurs: string = 'http://127.0.0.1:8000/api/livreurs'
  private urlPutCommande = 'http://127.0.0.1:8000/api/commandes'
  private urlPostLivraison:string = 'http://127.0.0.1:8000/api/livraisons' 
  private urlLivraisonAll:string = 'http://127.0.0.1:8000/api/livraisons'
  private urlCommandeLivraison:string = 'http://127.0.0.1:8000/api/livraisons'
  private urlputLivraison:string = 'http://127.0.0.1:8000/api/livraisons'
  constructor(
    private http:HttpClient,
    private token : TokenService
  ) { }

  /* all commande */
  allCommande(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    };
    return this.http.get<any>(this.urlAllCommande,httpOptions)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      ))
  }

  /* commandes par zones */
  commandesByZone(idZone:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    };
    return this.http.get<any>((`${this.urlCommandeZone}/${idZone}/commandes`),httpOptions)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      ))
  }

  /* liste des livreurs */
  allLivreurs(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    };
    return this.http.get<any>(this.urlLivreurs,httpOptions)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      ))
  }

  /* fonction modif etat commande */
  resetCommande (id:any,etat:string):Observable<number>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    }
    const body = {"etat": etat}
    return this.http.put<number>(this.urlPutCommande+"/"+id,body,httpOptions);
  }

  /* fonction ajout livraison */
  addLivraison(object:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    };
    //console.log(httpOptions)
    return this.http.post(this.urlPostLivraison,object,httpOptions)
  }
  /* liste des livraisons  */
  allLivraisons(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    };
    return this.http.get<any>(this.urlLivraisonAll,httpOptions)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      ))
  }

  /* commandes d une livraison */
  commandeByLivraison(id:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    };
    return this.http.get<any>(`${this.urlCommandeLivraison}/${id}/commandes`,httpOptions)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      ))
  }

  /* add livreur */
  addLivreur(object:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    };
    return this.http.post(this.urlLivreurs,JSON.stringify(object),httpOptions)
  }

  /* liste des zones */
  allZone(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    };
    return this.http.get<any>(this.urlCommandeZone,httpOptions)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      ))
  }
  /* valider livraison */
  validerLivraison (id:any,etat:string):Observable<number>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    }
    const body = {"etat": etat}
    return this.http.put<number>(this.urlputLivraison+"/"+id,body,httpOptions);
  }
}
