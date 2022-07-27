import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Catalogue } from '../models/catalogue';

@Injectable({
  providedIn: 'root'
})
export class CatalogueStoreService {

  private url:string = "https://brazil-burger-project.herokuapp.com/api/catalogues"

  constructor(private http:HttpClient) { }

  all():Observable<Catalogue> {
    return this.http.get<Catalogue>(this.url).pipe(
      map(data=>{
        data.produits=[...data.menus,...data.burgers]
        return data
      }),
    )
  }
}
