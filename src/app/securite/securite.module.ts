import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuriteRoutingModule } from './securite-routing.module';
import { SecuriteComponent } from './securite.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SecuriteComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SecuriteRoutingModule,
    RouterModule,
    FormsModule,
  ]
})
export class SecuriteModule { }
