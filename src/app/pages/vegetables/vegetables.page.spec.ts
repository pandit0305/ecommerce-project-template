import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { VegetablesPage } from './vegetables.page';

describe('VegetablesPage', () => {
  let component: VegetablesPage;
  let fixture: ComponentFixture<VegetablesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VegetablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
