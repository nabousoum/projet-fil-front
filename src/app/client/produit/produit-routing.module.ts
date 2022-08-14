import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROLE } from 'src/app/securite/shared/models/register';
import { AuthGuard } from 'src/app/_helpers/auth.guard';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DetailComponent } from './detail/detail.component';
import { ProduitComponent } from './produit.component';

const routes: Routes = [
  {
    path:"catalogues",
    component: CatalogueComponent,
  },
  {
    path:"detail/:type/:id",
    component: DetailComponent
  },
  { 
    path: '', 
    redirectTo: 'catalogues',  
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
