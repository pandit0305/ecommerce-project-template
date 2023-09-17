import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductSliderService } from 'src/app/services/productSlider/productSlider.service';
import { Location } from '@angular/common';
import { LocalStoreService } from 'src/app/services/localStore/localStore.service';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';
import { map, tap } from 'rxjs';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent  implements OnInit {
  items:any;
  name:string="";
  category:any=this.location.getState();
  breadCrumbs:IBreadCrumbSchema={ title: this.category?.title}
  subCategories=this.localStoreService.getData('category') || [];
  constructor(
    private localStoreService: LocalStoreService, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
     private location: Location,
     public homeService:HomeService
     ) { }

  ngOnInit() {
    console.log(this.category)
    this.items=this.category?.sub_categories;
  }
  gotoPages(item:any){
    console.log(item)
    this.name=item?.title;
    this.items=item?.sub_categories;
  }
  // add wishlist
  addWishlistedItem(item: any) {
    let productItems = this.localStoreService.getData(`${this.category.category}`);
    this.items = productItems.map((res: any) => {
      if (res.title === item?.title) {
        res.isWishlist = item?.isWishlist;
      }
      return res;
    })
    this.localStoreService.saveData(`${this.category.category}`, this.items);
    console.log(this.items);
  }
  // remove wishlist
  removeWishlist(item: any) {
    let productItems = this.localStoreService.getData(`${this.category.category}`);
    this.items = productItems.map((res: any) => {
      if (res.title === item?.title) {
        res.isWishlist = item?.isWishlist;
      }
      return res;
    })
    this.localStoreService.saveData(`${this.category.category}`, this.items);
    console.log(this.items);
  }
// add to cart
  addToCartItems(item:any){
    let productItems = this.localStoreService.getData(`${this.category.category}`);
    this.items = productItems.map((res: any) => {
      if (res.title === item?.title) {
        res.isCart = item?.isCart;
      }
      return res;
    })
    this.localStoreService.saveData(`${this.category.category}`, this.items);
    console.log(this.items);
  }

}