import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { CommandeComponent } from './commande.component';
import { PanierComponent } from './panier/panier.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { SuiviComponent } from './suivi/suivi.component';
import { DetailComponent } from './detail/detail.component';
import { LayoutModule } from 'src/app/client/layout/layout.module';
import { LigneCommandeComponent } from './ligne-commande/ligne-commande.component';
import { LignePanierComponent } from './panier/ligne-panier/ligne-panier.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SuiviLigneComponent } from './suivi/suivi-ligne/suivi-ligne.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    CommandeComponent,
    PanierComponent,
    LivraisonComponent,
    SuiviComponent,
    DetailComponent,
    LigneCommandeComponent,
    LignePanierComponent,
    SuiviLigneComponent
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    LayoutModule,
    NgbModule,
    NgxPaginationModule
    
  ],
  exports: [
    LigneCommandeComponent,
    LignePanierComponent,
  
  ]
})
export class CommandeModule { }
