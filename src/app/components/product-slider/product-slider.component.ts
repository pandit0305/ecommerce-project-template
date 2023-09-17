import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LocalStoreService } from 'src/app/services/localStore/localStore.service';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';
import { register } from 'swiper/element/bundle';
import { NotifyRequestProductComponent } from '../notify-request-product/notify-request-product.component';
register()

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss'],
})
export class ProductSliderComponent implements OnInit {
  @Output() addWishlistEmitter = new EventEmitter<any>()
  @Input() items: any;
  modelData: any;
  notifiedItems:any;
  isShow: boolean = false;
  screenWidth!:number;
  isLoading!: boolean;
  wishlistedItems: any=[];
  sliderItems:any=[];
  constructor(private router: Router, public modalController: ModalController, private wishlistService:WishlistService ,private modalCtrl: ModalController, private localStore:LocalStoreService) {}
  
  @HostListener('window:resize', ['$event'])
  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.displayItem();
  }
  // display items
  displayItem() {
    this.isLoading = true;
    setTimeout(() => {
      this.sliderItems = this.items;
      this.isLoading = false;
    }, 500);
  }
  // add wishlist
  addWishlist(item: any) {
    item.isWishlist = true;
    this.wishlistService.addWishlistedProduct(item);
    this.addWishlistEmitter.emit(item);
  }
  // remove wishlist
  removeFromWishList(item: any) {
    item.isWishlist = false;
    this.wishlistService.removeFromWishlist(item?.title);
    this.addWishlistEmitter.emit(item);
  }
  // go to single product page
  getProductItem(singleCardItem: any) {
    console.log(singleCardItem);
    this.router.navigateByUrl(`/single-product/${singleCardItem.id}`, {
      state: singleCardItem,
    });
  }
  addToCart(element: any) {
    element.already_added_to_cart = true;
    element.cart_quantity = 1;
    console.log(this.items);
  }
 
 async getNotifyProduct(item:any) {
   const modal = await this.modalController.create({
     component: NotifyRequestProductComponent,
     componentProps: {
       'name': item?.name
     }
   });
   modal.onDidDismiss().then((modelData) => {
     if (modelData !== null) {
       this.modelData = modelData.data;
     }
   });
   return await modal.present();
 }
}