import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { deliveryAddressesComponent } from './delivery-addresses.component';

describe('SavedAddressComponent', () => {
  let component: deliveryAddressesComponent;
  let fixture: ComponentFixture<deliveryAddressesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ deliveryAddressesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(deliveryAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
