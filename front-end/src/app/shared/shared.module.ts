import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { GuardsComponent } from './guards/guards.component';



@NgModule({
  declarations: [BreadcumbsComponent, GuardsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule
  ]
})
export class SharedModule { }
