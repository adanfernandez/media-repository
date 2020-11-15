import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { GuardsComponent } from './guards/guards.component';

/* IMPORTS DE PRIMENG*/
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [BreadcumbsComponent, GuardsComponent],
  imports: [
    CommonModule,
    InputTextModule,
    CardModule,
    ButtonModule
  ],
  exports: [
    FormsModule,
    InputTextModule,
    CardModule,
    ButtonModule
  ]
})
export class SharedModule { }
