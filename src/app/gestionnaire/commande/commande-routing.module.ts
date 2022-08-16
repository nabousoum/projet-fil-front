import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeComponent } from './commande.component';
import { SuiviComponent } from './suivi/suivi.component';

const routes: Routes = [
  { path: '', component: CommandeComponent },
  { path: 'suivi',
    component: SuiviComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
