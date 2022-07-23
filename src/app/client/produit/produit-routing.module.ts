import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProduitComponent } from './produit.component';

const routes: Routes = [
  { path: '', component: ProduitComponent },
  {
    path:"catalogues",
    component: CatalogueComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
