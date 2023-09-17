import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';
import { BlogPostService } from 'src/app/services/blog-post/blog-post.service';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.page.html',
  styleUrls: ['./blog-posts.page.scss'],
})
export class BlogPostsPage implements OnInit {
  breadCrumbs:IBreadCrumbSchema={url:'/blog-posts',title:'Posts'}
  blogPost:any = [];

  constructor(private blogPostService: BlogPostService, private router: Router) { 
    this.blogPost = blogPostService.showDate();
    console.log(this.blogPost);
  }

  ngOnInit() {
  }

  moveToBlogPage(object:any){
    this.router.navigateByUrl(`/home/blog-posts/${object.id}`, { state: object });
  }

}
