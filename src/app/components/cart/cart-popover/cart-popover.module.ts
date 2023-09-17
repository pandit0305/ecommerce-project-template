import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
// import { CartPopoverComponent } from './cart-popover.component';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [],
  imports: [
    CommonModule,
    IonicModule
  ],
})
export class CartPopoverModule { }
