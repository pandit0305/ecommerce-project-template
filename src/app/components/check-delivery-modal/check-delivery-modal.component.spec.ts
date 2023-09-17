import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { CheckDeliveryModalComponent } from './check-delivery-modal.component';

describe('CheckDeliveryModalComponent', () => {
  let component: CheckDeliveryModalComponent;
  let fixture: ComponentFixture<CheckDeliveryModalComponent>;
  let modalController: ModalController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckDeliveryModalComponent ],
      imports: [IonicModule.forRoot()],
      providers: [ModalController]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckDeliveryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // 1.should open the modal.

  // 2.should close the modal.

});
