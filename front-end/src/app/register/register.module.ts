import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterFormService } from './services/register-form.service';

@NgModule({
  declarations: [RegisterComponent],
  providers: [RegisterFormService],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, RegisterRoutingModule],
  exports: [RegisterComponent]
})
export class RegisterModule {}
