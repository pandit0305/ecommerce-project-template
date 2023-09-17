import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-by-category',
  templateUrl: './shop-by-category.component.html',
  styleUrls: ['./shop-by-category.component.scss'],
})
export class ShopByCategoryComponent implements OnInit {
  @Input() categories: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoCategoiesPage(item: any) {
    console.log(item)
    // this.router.navigate([`/home/shopByCategory/${item?.name}`]);
    this.router.navigateByUrl(`/home/shopByCategory/${item?._id}`, {
      state: item
    });
  }
}
