import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServService } from '../securite/shared/services/auth-serv.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  constructor(private authServ: AuthServService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true
    //this.authServ.user.roles?.includes('ROLE_GESTIONNAIRE');
  }
  // private isAuthorized(route:ActivatedRouteSnapshot):boolean {
  //   const roles = ['ROLE_GESTIONNAIRE','ROLE_CLIENT']
  //   const expectedRoles = route.data.expectedRoles
  //   const roleMatches = roles.findIndex(role => expectedRoles.indexOf(role) !== -1)
  //   return (roleMatches < 0) ? false : true
  // }
  
}
