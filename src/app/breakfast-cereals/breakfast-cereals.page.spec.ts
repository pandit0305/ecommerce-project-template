import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreakfastCerealsPage } from './breakfast-cereals.page';

describe('BreakfastCerealsPage', () => {
  let component: BreakfastCerealsPage;
  let fixture: ComponentFixture<BreakfastCerealsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BreakfastCerealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
