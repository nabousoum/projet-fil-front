import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { ProduitComponent } from './produit.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from 'src/app/gestionnaire/layout/layout.module';

@NgModule({
  declarations: [
    ProduitComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    LayoutModule
  ]
})
export class ProduitModule { }
