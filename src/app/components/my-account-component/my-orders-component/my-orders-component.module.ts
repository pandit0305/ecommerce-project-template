import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponentComponent } from './my-orders-component.component';
import { OrderDetailsComponentComponent } from '../order-details-component/order-details-component.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MyOrdersComponentComponent,OrderDetailsComponentComponent],
  imports: [
    CommonModule,
    
  ],
  exports: [MyOrdersComponentComponent]
})
export class MyOrdersComponentModule { }
