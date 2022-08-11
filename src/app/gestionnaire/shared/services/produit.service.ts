import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { TokenService } from 'src/app/securite/shared/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private urlFrites:string = 'http://127.0.0.1:8000/api/portion_frites'
  private urlTaille:string = 'http://127.0.0.1:8000/api/taille_boissons'
  private urlPostMenu:string = 'http://127.0.0.1:8000/api/menus'
  constructor(
    private http:HttpClient,
    private token : TokenService
    ) { }

  allFrites(){
    return this.http.get<any>(this.urlFrites)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      )
    )
  }
  allTaille(){
    return this.http.get<any>(this.urlTaille)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      ))
  }

  /*  ajouter menu */
  addMenu(object:any){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "multipart/form-data",
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    };
    //console.log(httpOptions)
    return this.http.post(this.urlPostMenu,JSON.stringify(object),httpOptions)
  }

}
