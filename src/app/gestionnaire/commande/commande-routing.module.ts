import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeComponent } from './commande.component';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
