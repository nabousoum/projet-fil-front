import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/_helpers/auth.guard';
import { CommandeComponent } from './commande.component';
import { DetailComponent } from './detail/detail.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { PanierComponent } from './panier/panier.component';
import { SuiviComponent } from './suivi/suivi.component';

const routes: Routes = [
  { path: '', component: CommandeComponent },
  {
    path:"panier",
    component: PanierComponent
  },
  {
    path:"livraison",
    component: LivraisonComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"suivi",
    component: SuiviComponent
  },
  {
    path:"detail/:1",
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
