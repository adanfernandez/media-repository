import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { GuardsComponent } from './guards/guards.component';

/* IMPORTS DE PRIMENG*/
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [BreadcumbsComponent, GuardsComponent],
  imports: [
    CommonModule,
    InputTextModule
  ],
  exports: [
    FormsModule,
    InputTextModule
  ]
})
export class SharedModule { }
