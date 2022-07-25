import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { ProduitComponent } from './produit.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CardComponent } from './catalogue/card/card.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProduitComponent,
    CatalogueComponent,
    CardComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    RouterModule
  ],
  exports:[
    CardComponent,
    CatalogueComponent
  ]
})
export class ProduitModule { }
