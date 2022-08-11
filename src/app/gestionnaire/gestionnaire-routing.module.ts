import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_helpers/auth.guard';
import { RoleGuardGuard } from '../_helpers/role-guard.guard';
import { GestionnaireComponent } from './gestionnaire.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

const routes: Routes = [
  { 
    path: '',
   component: NavbarComponent
   },
   { 
    path: 'dashboard',
    component: NavbarComponent,
    // canActivate: [AuthGuard,RoleGuardGuard],
    // data:{
    //   expectedRoles:['ROLE_GESTIONNAIRE']
    // }
   },
  { path: 'produit', loadChildren: () => import('./produit/produit.module').then(m => m.ProduitModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionnaireRoutingModule { }
