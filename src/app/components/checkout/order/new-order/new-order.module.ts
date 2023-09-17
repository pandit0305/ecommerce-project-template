import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewOrderComponent } from './new-order.component';
import { DeliveryModeModule } from '../../shippingMode/delivery-mode/delivery-mode.module';
import { PickupModeModule } from '../../shippingMode/pickup-mode/pickup-mode.module';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [NewOrderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    PickupModeModule,
    DeliveryModeModule,
  ],
  exports:[NewOrderComponent]
})
export class NewOrderModule { }
