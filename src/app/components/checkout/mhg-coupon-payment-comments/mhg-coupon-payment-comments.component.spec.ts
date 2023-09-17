import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MhgCouponPaymentCommentsComponent } from './mhg-coupon-payment-comments.component';

describe('MhgCouponPaymentCommentsComponent', () => {
  let component: MhgCouponPaymentCommentsComponent;
  let fixture: ComponentFixture<MhgCouponPaymentCommentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MhgCouponPaymentCommentsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MhgCouponPaymentCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
