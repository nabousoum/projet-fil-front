import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private urlRegister = 'http://127.0.0.1:8000/api/register'

  constructor(
    private http: HttpClient,
  ) { }
    saveUser(object:Register){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.http.post(this.urlRegister,JSON.stringify(object),httpOptions)
    }

}
