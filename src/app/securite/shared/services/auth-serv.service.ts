import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ICredential, IToken } from '../models/Icredentials';
import { Register } from '../models/register';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServService {

  url = 'http://127.0.0.1:8000/api/login_check'

  constructor(private http:HttpClient,private token :TokenService) {
   
  }

  /* function login */
  login(credentials:ICredential):Observable<IToken>{
    return this.http.post<any>(this.url, credentials)
    .pipe(map(user => {
      localStorage.setItem('token', JSON.stringify(user));
      return user;
    }));
  }


}
