import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  
  constructor(private router : Router) { }
  saveToken(token: string):void {
    var token:string = this.getToken();
    var decoded: any= jwt_decode(token);
    localStorage.setItem('token', token)
    if(decoded.roles[0] == ["ROLE_GESTIONNAIRE"] ){
      this.router.navigate(['/gestionnaire'])
    }
    else{
      this.router.navigate(['/client/commande/panier'])
    }

  }

  isLogged():boolean{
    const token = localStorage.getItem('token')
    console.log(token)
    return !! token
  }

  clearToken():void{
    localStorage.removeItem('token')
    this.router.navigate(['/client/produits/catalogues'])
  }

  getToken():any{
    const token = localStorage.getItem('token')
    return token
  }
}
