import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { LocationPopOverComponent } from './location-popover.component';
import { PopoverController } from '@ionic/angular';

describe('LocationPopOverComponent', () => {
  let component: LocationPopOverComponent;
  let fixture: ComponentFixture<LocationPopOverComponent>;
  let modalController: PopoverController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationPopOverComponent ],
      imports: [IonicModule.forRoot()],
      providers: [PopoverController]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationPopOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // 1.should open the popover.

  // 2.should close the popover.

  // 3.should close the popover when button is clicked.

});
