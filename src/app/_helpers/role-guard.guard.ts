import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  // private isAuthorized(route:ActivatedRouteSnapshot):boolean {
  //   const roles = ['ROLE_GESTIONNAIRE','ROLE_CLIENT']
  //   const expectedRoles = route.data.expectedRoles
  //   const roleMatches = roles.findIndex(role => expectedRoles.indexOf(role) !== -1)
  //   return (roleMatches < 0) ? false : true
  // }
  
}
