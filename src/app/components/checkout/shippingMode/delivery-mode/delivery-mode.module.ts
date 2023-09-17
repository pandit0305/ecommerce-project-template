import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryModeComponent } from './delivery-mode.component';


@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [DeliveryModeComponent],
  imports: [
    CommonModule
  ],
  exports:[DeliveryModeComponent]
})
export class DeliveryModeModule { }
