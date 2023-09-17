import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class BlogPageComponent  implements OnInit {
  posts: any = this.location.getState();
  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    console.log(this.posts)
  }
  gotoGrocery(){
    this.router.navigate(['home']);
  }

}
