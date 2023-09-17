import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AddAddressesModalVersion2Component } from './add-addresses-modal-version2.component';


describe('AddAddressVersion2Component', () => {
  let component: AddAddressesModalVersion2Component;
  let fixture: ComponentFixture<AddAddressesModalVersion2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAddressesModalVersion2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddAddressesModalVersion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
