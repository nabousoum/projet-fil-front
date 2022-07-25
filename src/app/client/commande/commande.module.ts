import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { CommandeComponent } from './commande.component';
import { PanierComponent } from './panier/panier.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { SuiviComponent } from './suivi/suivi.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    CommandeComponent,
    PanierComponent,
    LivraisonComponent,
    SuiviComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule
  ]
})
export class CommandeModule { }
