import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponentComponent } from './order-details-component.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [OrderDetailsComponentComponent],
  imports: [
    CommonModule,

  ],
  exports: [OrderDetailsComponentComponent]
})
export class OrderDetailsComponentModule { }
