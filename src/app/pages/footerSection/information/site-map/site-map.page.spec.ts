import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiteMapPage } from './site-map.page';

describe('SiteMapPage', () => {
  let component: SiteMapPage;
  let fixture: ComponentFixture<SiteMapPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SiteMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
