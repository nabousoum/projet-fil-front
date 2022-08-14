import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROLE } from '../securite/shared/models/register';
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

   },
  { path: 'produit',
   loadChildren: () => import('./produit/produit.module').then(m => m.ProduitModule) },

  { path: 'gestionnaire', 
    loadChildren: () => import('./commande/commande.module').then(m => m.CommandeModule),
    // canActivate: [AuthGuard],
    // data: { roles: [ROLE.admin] } 
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionnaireRoutingModule { }
