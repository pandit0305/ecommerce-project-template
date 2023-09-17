import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProductSliderComponent } from './product-slider.component';
import { CartButtonModule } from '../cart/cart-button/cart-button.module';
import { CartButton1Component } from '../cart-button1/cart-button1.component';
import { NotifyRequestProductComponent } from '../notify-request-product/notify-request-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    ProductSliderComponent,
    CartButton1Component,
    NotifyRequestProductComponent,
  ],
  imports: [CommonModule, FormsModule,ReactiveFormsModule,IonicModule, CartButtonModule],
  exports: [ProductSliderComponent],
})
export class ProductSliderModule {}
