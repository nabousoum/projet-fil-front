import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { ProduitComponent } from './produit.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from 'src/app/gestionnaire/layout/layout.module';
import { FormMenuComponent } from './menu/form-menu/form-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChoixComponent } from './menu/form-menu/choix/choix.component';

@NgModule({
  declarations: [
    ProduitComponent,
    MenuComponent,
    FormMenuComponent,
    ChoixComponent
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ]
})
export class ProduitModule { }
