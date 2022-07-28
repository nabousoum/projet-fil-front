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
    return this.http.get<Catalogue>(this.url).pipe(
      map(data=>{
        data.produits=[...data.menus,...data.burgers]
        return data
      }),
    )
  }

  burgers():Observable<Catalogue> { 
    return this.http.get<Catalogue>(this.url).pipe(
      map(data=>{
        data.produits=[...data.burgers]
        return data
      }),
    )
  }
  menus():Observable<Catalogue> { 
    return this.http.get<Catalogue>(this.url).pipe(
      map(data=>{
        data.produits=[...data.menus]
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