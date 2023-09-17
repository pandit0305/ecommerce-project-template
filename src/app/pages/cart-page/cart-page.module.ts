import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CartPageRoutingModule } from './cart-page-routing.module';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/components/header/header.module';
import { BreadCrumbModule } from 'src/app/components/bread-crumb/bread-crumb.module';
import { CartPageComponent } from './cart-page.component';
import { PaymentOrderSummaryModule } from 'src/app/components/cart/payment-order-summary/payment-order-summary.module';
import { CartButtonModule } from 'src/app/components/cart/cart-button/cart-button.module';
import { CartProductModule } from 'src/app/components/cart/cart-product/cart-product.module';
import { AddressComponent } from 'src/app/components/cart/address/address.component';
import { AddressModule } from 'src/app/components/cart/address/address.module';
import { ProductModule } from 'src/app/components/product-card/product.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CartPageComponent, AddressComponent],
  imports: [
    CommonModule,
    CartPageRoutingModule,
    ReactiveFormsModule,
    IonicModule,
    HeaderModule,
    BreadCrumbModule,
    ProductModule,
    PaymentOrderSummaryModule,
    CartButtonModule,
    AddressModule,
    CartProductModule,
  ],
})
export class CartPageModule {}
