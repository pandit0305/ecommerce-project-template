import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FruitsPage } from './fruits.page';

describe('FruitsPage', () => {
  let component: FruitsPage;
  let fixture: ComponentFixture<FruitsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FruitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
