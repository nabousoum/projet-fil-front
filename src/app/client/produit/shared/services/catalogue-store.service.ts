import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Catalogue } from '../models/catalogue';
import { Produit } from '../models/produit';
import { Detail } from '../models/detail';

@Injectable({
  providedIn: 'root'
})
export class CatalogueStoreService {

  private url:string = "https://brazil-burger-project.herokuapp.com/api/catalogues"
  private urlDetail:string = "https://brazil-burger-project.herokuapp.com/api"

  constructor(private http:HttpClient) { }

  all():Observable<Catalogue> {
    return this.http.get<any>(this.url).pipe(
      map(data=>{
        let catalogues : Catalogue= {
          burgers: data['hydra:member'][0]['burgers'],
          menus:data['hydra:member'][1]['menus'],
        }
        
        data.produits=[...catalogues.menus,...catalogues.burgers]
        console.log(data)
        return data
      }),
    )
  }

  produit$(id:number,type:string):Observable<Detail> {
    if(type=="menu"){
      return this.http.get<Detail>(`${this.urlDetail}/menus/${id}`)
    }
    return this.http.get<Detail>(`${this.urlDetail}/burgers/${id}`)
    
  }
}