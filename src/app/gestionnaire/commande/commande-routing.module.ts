import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeComponent } from './commande.component';
import { ListeCommandesComponent } from './livraison/liste/liste-commandes/liste-commandes.component';
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
  },
  {
    path:'listeCommande/:id',
    component:ListeCommandesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
