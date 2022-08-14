import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServService } from '../securite/shared/services/auth-serv.service';
import { TokenService } from '../securite/shared/services/token.service';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokenService: TokenService,
    private authenticationService:  AuthServService,
    ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var token = this.tokenService.getToken();
      var decoded: any= jwt_decode(token);
        if (this.tokenService.isLogged() && route.data['roles'] === decoded.roles[0]) {
          
          return false;
        }
        else{
          this.router.navigate(['/securite/login']);
        }
      return true;

  }
  
}
