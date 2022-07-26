import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class CatalogueStoreService {

  private url:string = "https://brazil-burger-project.herokuapp.com/api/menus"

  constructor(private http:HttpClient) { }

  all():Observable<Menu[]> {
    return this.http.get<Menu[]>(this.url)
  }
}
