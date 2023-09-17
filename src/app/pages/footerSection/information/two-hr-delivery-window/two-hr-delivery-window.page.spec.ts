import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwoHrDeliveryWindowPage } from './two-hr-delivery-window.page';

describe('TwoHrDeliveryWindowPage', () => {
  let component: TwoHrDeliveryWindowPage;
  let fixture: ComponentFixture<TwoHrDeliveryWindowPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TwoHrDeliveryWindowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
