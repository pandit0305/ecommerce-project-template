import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { HomeService } from 'src/app/services/home/home.service';
import { LocalStoreService } from 'src/app/services/localStore/localStore.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: any = [];

  constructor(private router: Router, private homeService: HomeService, public localStore: LocalStoreService) { }

  ngOnInit() {
    this.getCategories();
  }
  getCategories() {
    this.categories = this.homeService.getCateGories();

    this.localStore.saveData('category', this.categories);
    // this.homeService.getCateGories().pipe(
    //   map((res: any) => {
    //     console.log(res)
    //     res.map((result: any) => {
    //       result.active = false;
    //       return result;
    //     })
    //     this.categories = res;
    //     this.localStore.saveData('category', res);
    //   })
    // ).subscribe()
  }
  gotoCategoiesPage(item: any) {
    console.log(item)
    this.router.navigateByUrl(`/home/shopByCategory/${item?._id}`, {
      state: item
    });
  }
}