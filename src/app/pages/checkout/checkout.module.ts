import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { BreadCrumbModule } from 'src/app/components/bread-crumb/bread-crumb.module';
import { PaymentOrderSummaryModule } from 'src/app/components/cart/payment-order-summary/payment-order-summary.module';
import { CartProductModule } from 'src/app/components/cart/cart-product/cart-product.module';
import { NewOrderModule } from 'src/app/components/checkout/order/new-order/new-order.module';
import { MhgCouponPaymentCommentsModule } from 'src/app/components/checkout/mhg-coupon-payment-comments/mhg-coupon-payment-comments.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    IonicModule,
    HeaderModule,
    BreadCrumbModule,
    PaymentOrderSummaryModule,
    CartProductModule,
    NewOrderModule,
    MhgCouponPaymentCommentsModule
  ]
})
export class CheckoutModule { }
