import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private urlFrites:string = 'http://127.0.0.1:8000/api/portion_frites'
  private urlTaille:string = 'http://127.0.0.1:8000/api/taille_boissons'
  
  constructor(private http:HttpClient) { }

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

}
