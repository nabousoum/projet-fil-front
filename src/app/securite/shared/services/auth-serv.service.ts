import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICredential, IToken } from '../models/Icredentials';

@Injectable({
  providedIn: 'root'
})
export class AuthServService {

  url = 'http://127.0.0.1:8000/api/login_check'
  
  constructor(private http:HttpClient) {
    
   }

  /* function login */

  login(credentials:ICredential):Observable<IToken>{
    return this.http.post<IToken>(this.url, credentials)
  }

  /*fonction user*/


}
