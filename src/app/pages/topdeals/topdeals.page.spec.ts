import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopdealsPage } from './topdeals.page';

describe('TopdealsPage', () => {
  let component: TopdealsPage;
  let fixture: ComponentFixture<TopdealsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TopdealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
