import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeComponent } from './commande.component';
import { ListeComponent } from './livraison/liste/liste.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { SuiviComponent } from './suivi/suivi.component';

const routes: Routes = [
  { path: '',
    component: CommandeComponent
  },
  { path: 'suivi',
    component: SuiviComponent,
  },
  { path: 'livraison',
    component: LivraisonComponent,
  },
  {
    path:'listeLivraison',
    component: ListeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
