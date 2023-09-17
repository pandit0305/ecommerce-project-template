import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogPostsPage } from './blog-posts.page';

const routes: Routes = [
  {
    path: '',
    component: BlogPostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogPostsPageRoutingModule {}
