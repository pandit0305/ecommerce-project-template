import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { IonicModule } from '@ionic/angular';
import { CartButtonModule } from '../cart/cart-button/cart-button.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ProductCardComponent],
  imports: [CommonModule, IonicModule, CartButtonModule],
  exports: [ProductCardComponent],
})
export class ProductModule {}
