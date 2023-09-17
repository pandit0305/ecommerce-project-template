import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { EditAddressModalVersion2Component } from './edit-address-modal-version2.component';


describe('EditAddressVersion2ModalComponent', () => {
  let component: EditAddressModalVersion2Component;
  let fixture: ComponentFixture<EditAddressModalVersion2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddressModalVersion2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditAddressModalVersion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
