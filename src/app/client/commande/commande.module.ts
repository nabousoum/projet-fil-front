import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { CommandeComponent } from './commande.component';
import { PanierComponent } from './panier/panier.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { SuiviComponent } from './suivi/suivi.component';
import { DetailComponent } from './detail/detail.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { LigneCommandeComponent } from './ligne-commande/ligne-commande.component';
import { CardCountComponent } from '../card-count/card-count.component';
import { LignePanierComponent } from './panier/ligne-panier/ligne-panier.component';


@NgModule({
  declarations: [
    CommandeComponent,
    PanierComponent,
    LivraisonComponent,
    SuiviComponent,
    DetailComponent,
    LigneCommandeComponent,
    LignePanierComponent
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    LayoutModule,
  ],
  exports: [
    LigneCommandeComponent,
    LignePanierComponent,
  
  ]
})
export class CommandeModule { }
