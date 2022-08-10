import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionnaireRoutingModule } from './gestionnaire-routing.module';
import { GestionnaireComponent } from './gestionnaire.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    GestionnaireComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    GestionnaireRoutingModule
  ]
})
export class GestionnaireModule { }
