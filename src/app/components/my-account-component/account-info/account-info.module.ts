import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountInfoComponent } from './account-info.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AccountInfoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [AccountInfoComponent]
})
export class AccountInfoModule { }
