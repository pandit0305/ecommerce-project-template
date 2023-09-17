import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReturnPolicyPage } from './return-policy.page';

describe('ReturnPolicyPage', () => {
  let component: ReturnPolicyPage;
  let fixture: ComponentFixture<ReturnPolicyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReturnPolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
