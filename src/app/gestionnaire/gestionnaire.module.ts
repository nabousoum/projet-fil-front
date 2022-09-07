import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionnaireRoutingModule } from './gestionnaire-routing.module';
import { GestionnaireComponent } from './gestionnaire.component';
import { LayoutModule } from './layout/layout.module';
import { CommandeFilter } from './shared/services/commande-filter.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    GestionnaireComponent,
    DashboardComponent,  
  ],
  imports: [
    CommonModule,
    GestionnaireRoutingModule,
    LayoutModule
  ],
  exports:[
    GestionnaireComponent
  ]

})
export class GestionnaireModule { }
