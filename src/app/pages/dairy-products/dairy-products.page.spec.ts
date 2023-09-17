import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DairyProductsPage } from './dairy-products.page';

describe('DairyProductsPage', () => {
  let component: DairyProductsPage;
  let fixture: ComponentFixture<DairyProductsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DairyProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
