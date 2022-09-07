import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROLE } from 'src/app/securite/shared/models/register';
import { AuthGuard } from 'src/app/_helpers/auth.guard';
import { BoissonComponent } from './boisson/boisson.component';
import { BurgerComponent } from './burger/burger.component';
import { FormBurgerComponent } from './burger/form-burger/form-burger.component';
import { FriteComponent } from './frite/frite.component';
import { FormMenuComponent } from './menu/form-menu/form-menu.component';
import { MenuComponent } from './menu/menu.component';
import { ProduitComponent } from './produit.component';

const routes: Routes = [
  { path: 'menu',
   component: MenuComponent,
  },
  { path: 'addMenu',
   component: FormMenuComponent
  },
  { path: 'burger',
    component: BurgerComponent,
  },
  { path: 'addBurger',
   component: FormBurgerComponent
  },
  { path: 'frite',
    component: FriteComponent
  },
  {
    path: 'boisson',
    component: BoissonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
