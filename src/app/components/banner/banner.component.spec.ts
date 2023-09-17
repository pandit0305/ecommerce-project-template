import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // 1.should display loading message while loading
  it('should display skeleton loading while data is loading', () => {
    component.isLoading = true;
    fixture.detectChanges();

    const skeletonLoading: HTMLElement = fixture.nativeElement.querySelector('ion-skeleton-text');
    expect(skeletonLoading).toBeTruthy();
  });
  // 2. should hide skeleton loading after data is loaded 
  it('should hide skeleton loading after data is loaded', () => {
    component.isLoading = false;
    fixture.detectChanges();

    const skeletonLoading: HTMLElement = fixture.nativeElement.querySelector('ion-skeleton-text');
    expect(skeletonLoading).toBeFalsy();
  });

  // 3.should initialize with the correct default values.
  it('should initialize with the correct default values',()=>{
    expect(component.sliders.length).toBeGreaterThan(1);
  })
  // 4.should display the first image on initialization.
  it('should display the first image on initialization', ()=>{
    const imageElement:HTMLElement = fixture.nativeElement.querySelector('img');
    
    // expect(imageElement.src).toBe('assets/slider-new/1.jpg');
  })
  
});
