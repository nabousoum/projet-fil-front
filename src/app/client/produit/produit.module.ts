import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { ProduitComponent } from './produit.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CardComponent } from './catalogue/card/card.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from 'src/app/client/layout/layout.module';
import { DetailMenuComponent } from './detail/detail-menu/detail-menu.component';
import { ChoixBoissonComponent } from './detail/choix-boisson/choix-boisson.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CardCountComponent } from './detail/card-count/card-count.component';
import { CardDetailComponent } from './detail/card-detail/card-detail.component';  
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProduitComponent,
    CatalogueComponent,
    CardComponent,
    DetailComponent,
    DetailMenuComponent,
    ChoixBoissonComponent,
    CardCountComponent,
    CardDetailComponent
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    RouterModule,
    LayoutModule,
    NgbModule,
    FormsModule
  ],
  exports:[
    CardComponent,
    CatalogueComponent,
    DetailMenuComponent,
    ChoixBoissonComponent
  ]
})
export class ProduitModule { }
