import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMenuComponent } from './menu/form-menu/form-menu.component';
import { MenuComponent } from './menu/menu.component';
import { ProduitComponent } from './produit.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'addMenu', component: FormMenuComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
