import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROLE } from '../securite/shared/models/register';
import { AuthGuard } from '../_helpers/auth.guard';
import { ClientComponent } from './client.component';

const routes: Routes = [
  { path: 'produits',
   loadChildren: () => import('./produit/produit.module').then(m => m.ProduitModule),
   },
  { path: '', redirectTo: 'produits',  pathMatch: 'full' },
  { path: 'commande', loadChildren: () => import('./commande/commande.module').then(m => m.CommandeModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
