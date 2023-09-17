import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentOrderSummaryComponent } from './payment-order-summary.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [PaymentOrderSummaryComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[PaymentOrderSummaryComponent]
})
export class PaymentOrderSummaryModule { }
