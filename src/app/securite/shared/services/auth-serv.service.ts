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
  private userSubject: BehaviorSubject<Register>;
  public user: Observable<Register>;
  
  constructor(private http:HttpClient,private token :TokenService) {
    this.userSubject = new BehaviorSubject<Register>(JSON.parse(localStorage.getItem('token') || 'null'));
    this.user = this.userSubject.asObservable();
   }

   public get userValue(): Register {
    return this.userSubject.value;
}
  /* function login */

  login(credentials:ICredential):Observable<IToken>{
    return this.http.post<any>(this.url, credentials).pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('token', JSON.stringify(user));
      this.userSubject.next(user);
      return user;
  }));

  }

  /*fonction user*/
  // private getUser(token:any):Register{
  //   return JSON.parse(atob(token.split('.')[1])) as Register;
  // }

}
