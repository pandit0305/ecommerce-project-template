import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { LocationPopOverComponent } from '../location-popover/location-popover.component';
import { CheckDeliveryModalComponent } from '../check-delivery-modal/check-delivery-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CartPopoverComponent } from '../cart/cart-popover/cart-popover.component';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HeaderComponent, LocationPopOverComponent, CheckDeliveryModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
