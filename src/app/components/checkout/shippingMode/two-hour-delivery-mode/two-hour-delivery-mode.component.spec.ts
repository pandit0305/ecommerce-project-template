import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TwoHourDeliveryModeComponent } from './two-hour-delivery-mode.component';

describe('TwoHourDeliveryModeComponent', () => {
  let component: TwoHourDeliveryModeComponent;
  let fixture: ComponentFixture<TwoHourDeliveryModeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoHourDeliveryModeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TwoHourDeliveryModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
