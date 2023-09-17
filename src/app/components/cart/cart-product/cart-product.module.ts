import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartProductComponent } from './cart-product.component';
import { IonicModule } from '@ionic/angular';
import { CartButtonModule } from '../cart-button/cart-button.module';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CartProductComponent],
  imports: [
    CommonModule,
    IonicModule,
    CartButtonModule
  ],
  exports:[CartProductComponent]
})
export class CartProductModule { }