import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MhgCouponPaymentCommentsComponent } from './mhg-coupon-payment-comments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MhgCouponPaymentCommentsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[MhgCouponPaymentCommentsComponent]
})
export class MhgCouponPaymentCommentsModule { }
