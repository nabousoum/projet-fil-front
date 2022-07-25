import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { ProduitComponent } from './produit.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CardComponent } from './catalogue/card/card.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from 'src/app/layout/layout.module';
import { DetailMenuComponent } from './detail/detail-menu/detail-menu.component';



@NgModule({
  declarations: [
    ProduitComponent,
    CatalogueComponent,
    CardComponent,
    DetailComponent,
    DetailMenuComponent
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    RouterModule,
    LayoutModule
  ],
  exports:[
    CardComponent,
    CatalogueComponent,
    DetailMenuComponent
  ]
})
export class ProduitModule { }
