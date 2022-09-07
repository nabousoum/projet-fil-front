import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SecuriteComponent } from './securite.component';

const routes: Routes = [
  { 
    path: '', component: SecuriteComponent
  },
  { 
    path: 'login', component: LoginComponent
  },
  { 
    path: 'register', component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecuriteRoutingModule { }
