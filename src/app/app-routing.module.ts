import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './notFound/page.not.found/page.not.found.component';

const routes: Routes = [
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) 
  },
  {
    path:"notFound",
    component: PageNotFoundComponent
  },
  { 
    path: 'securite', loadChildren: () => import('./securite/securite.module').then(m => m.SecuriteModule) 
  },
  { 
    path: 'gestionnaire',
     loadChildren: () => import('./gestionnaire/gestionnaire.module').then(m => m.GestionnaireModule) 
  },
  {
    path: '**',
    redirectTo: "notFound"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
