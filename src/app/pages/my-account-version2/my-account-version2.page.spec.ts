import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyAccountVersion2Page } from './my-account-version2.page';

describe('MyAccountVersion2Page', () => {
  let component: MyAccountVersion2Page;
  let fixture: ComponentFixture<MyAccountVersion2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyAccountVersion2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
