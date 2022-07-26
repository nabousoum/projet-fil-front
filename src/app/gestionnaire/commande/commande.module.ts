import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { CommandeComponent } from './commande.component';
import { SuiviComponent } from './suivi/suivi.component';
import { LayoutModule } from '../layout/layout.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommandeCLientFilter, CommandeDateFilter, CommandeFilter, CommandeZoneFilter } from '../shared/services/commande-filter.pipe';
import { LivraisonComponent } from './livraison/livraison.component';
import { ListeComponent } from './livraison/liste/liste.component';
import { ListeCommandesComponent } from './livraison/liste/liste-commandes/liste-commandes.component';
import { LivreurComponent } from './livreur/livreur.component';
import { FormLivreurComponent } from './livreur/form-livreur/form-livreur.component';
import { ZoneComponent } from './zone/zone.component';
import { FormZoneComponent } from './zone/form-zone/form-zone.component';



@NgModule({
  declarations: [
    CommandeComponent,
    SuiviComponent,
    CommandeFilter,
    LivraisonComponent,
    CommandeDateFilter,
    CommandeZoneFilter,
    CommandeCLientFilter,
    ListeComponent,
    ListeCommandesComponent,
    LivreurComponent,
    FormLivreurComponent,
    ZoneComponent,
    FormZoneComponent
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    LayoutModule,
    NgxPaginationModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class CommandeModule { }
