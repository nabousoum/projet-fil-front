import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionnaireComponent } from './gestionnaire.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { 
    path: '',
   component: NavbarComponent
   },
   { 
    path: 'dashboard',
   component: NavbarComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionnaireRoutingModule { }
