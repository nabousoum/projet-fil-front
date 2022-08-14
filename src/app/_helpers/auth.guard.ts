import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServService } from '../securite/shared/services/auth-serv.service';
import { TokenService } from '../securite/shared/services/token.service';

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
    
   
    // if(this.tokenService.isLogged()){
    //   return true
    // }
    // return this.router.navigate(['/securite/login']);

    const user = this.authenticationService.userValue;
        if (user) {
            // check if route is restricted by role
            if (route.data['roles'].includes(user.roles)) {
                // role not authorised so redirect to home page
                this.router.navigate(['/client/produits/catalogues']);
                return false;
            }

            // authorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/securite/login'], { queryParams: { returnUrl: state.url } });
        return false;
  }
  
}
