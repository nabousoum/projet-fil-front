import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { LayoutModule } from './layout/layout.module';
import { CardCountComponent } from './card-count/card-count.component';


@NgModule({
  declarations: [
    ClientComponent,
    CardCountComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    LayoutModule,
  ],
  exports: [
    CardCountComponent,
    ClientComponent,
  ]
})
export class ClientModule { }
