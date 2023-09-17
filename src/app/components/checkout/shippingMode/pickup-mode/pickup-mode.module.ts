import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PickupModeComponent } from './pickup-mode.component';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [PickupModeComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[PickupModeComponent]
})
export class PickupModeModule { }
