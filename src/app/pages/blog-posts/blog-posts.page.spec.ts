import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogPostsPage } from './blog-posts.page';

describe('BlogPostsPage', () => {
  let component: BlogPostsPage;
  let fixture: ComponentFixture<BlogPostsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BlogPostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
