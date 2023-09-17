import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeliveryAddressesVersion2Component } from './delivery-addresses-version2.component';

describe('DeliveryAddressesComponent', () => {
  let component: DeliveryAddressesVersion2Component;
  let fixture: ComponentFixture<DeliveryAddressesVersion2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryAddressesVersion2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryAddressesVersion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
