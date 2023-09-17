import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartButtonComponent } from './cart-button.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CartButtonComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[CartButtonComponent]
})
export class CartButtonModule { }
