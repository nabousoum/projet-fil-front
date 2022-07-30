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

  private url:string = "http://127.0.0.1:8000/api/catalogues"
  private urlDetail:string = "http://127.0.0.1:8000/api/details"

  constructor(private http:HttpClient) { }

  all():Observable<Catalogue> {
    return this.http.get<any>(this.url).pipe(
      map(data=>{
        let catalogues : Catalogue= {
          burgers: data['hydra:member'][0]['burgers'],
          menus:data['hydra:member'][1]['menus'],
        }
        data.produits=[...catalogues.menus,...catalogues.burgers]
        return data
      }),
    )
  }

  produit$(id:number):Observable<Detail> {
    return this.http.get<any>(`${this.urlDetail}/${id}`).pipe(
      map(data=>{
        return data
      }),
    )
  }
}