import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CookiesPolicyPage } from './cookies-policy.page';

describe('CookiesPolicyPage', () => {
  let component: CookiesPolicyPage;
  let fixture: ComponentFixture<CookiesPolicyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CookiesPolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
