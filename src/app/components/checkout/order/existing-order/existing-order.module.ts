import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExistingOrderComponent } from './existing-order.component';
import { IonicModule } from '@ionic/angular';
import { DeliveryModeModule } from '../../shippingMode/delivery-mode/delivery-mode.module';
import { PickupModeModule } from '../../shippingMode/pickup-mode/pickup-mode.module';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ExistingOrderComponent],
  imports: [
    CommonModule,
    DeliveryModeModule,
    IonicModule,
    PickupModeModule,
  ],
  exports:[ExistingOrderComponent]
})
export class ExistingOrderModule { }
