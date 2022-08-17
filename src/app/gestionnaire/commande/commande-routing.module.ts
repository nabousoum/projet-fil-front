import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeComponent } from './commande.component';
import { ListeCommandesComponent } from './livraison/liste/liste-commandes/liste-commandes.component';
import { ListeComponent } from './livraison/liste/liste.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { FormLivreurComponent } from './livreur/form-livreur/form-livreur.component';
import { LivreurComponent } from './livreur/livreur.component';
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
    component: ListeCommandesComponent
  },
  {
    path:'livreur',
    component: LivreurComponent
  },
  {
    path:'formLivreur',
    component:FormLivreurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
