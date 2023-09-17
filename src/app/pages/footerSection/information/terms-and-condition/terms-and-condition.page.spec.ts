import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermsAndConditionPage } from './terms-and-condition.page';

describe('TermsAndConditionPage', () => {
  let component: TermsAndConditionPage;
  let fixture: ComponentFixture<TermsAndConditionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TermsAndConditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
