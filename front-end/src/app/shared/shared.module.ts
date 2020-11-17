import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { GuardsComponent } from './guards/guards.component';
import { HttpClientModule } from '@angular/common/http';

/* IMPORTS DE PRIMENG*/
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {ValidationErrorComponent} from './validation-error/validation-error.component';

@NgModule({
  declarations: [BreadcumbsComponent, GuardsComponent, ValidationErrorComponent],
  imports: [
    CommonModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    MenuModule,
    HttpClientModule
  ],
  exports: [
    FormsModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    MenuModule,
    ValidationErrorComponent
  ]
})
export class SharedModule { }
