import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mhg-coupon-payment-comments',
  templateUrl: './mhg-coupon-payment-comments.component.html',
  styleUrls: ['./mhg-coupon-payment-comments.component.scss'],
})
export class MhgCouponPaymentCommentsComponent  implements OnInit {
  @Output() addRewardEmitter=new EventEmitter<any>();
  @Output() addCouponEmitter=new EventEmitter<any>();
  rewards=0.68;
  couponForm: any;
  constructor(private fb:FormBuilder) { 
    this.initForm();
  }
  ngOnInit() {}
  initForm(){
    this.couponForm=this.fb.group({
      couponCode:['']
    })
  }
  applyRewards(){
    this.addRewardEmitter.emit(this.rewards);
  }
  applyCoupon(){
    let coupon = this.couponForm.value.couponCode;
    if(coupon==="CCS"){
      this.addCouponEmitter.emit(10);
    }else{
      alert("Invalid Coupon Code.")
    }
  }
}
