import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { AddToCartService } from 'src/app/services/addToCart/addToCart.service';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Output() addWishlistEmitter = new EventEmitter<any>();
  @Output() removeWishlistEmitter = new EventEmitter<any>();
  @Output() addToCartEmitter = new EventEmitter<any>();
  @Input() items: any;
  wishlist: any =[];
  isLoading!: boolean;
  wishlistedItems: any = [];
  constructor(private router: Router, private addToCartService: AddToCartService, private wishlistService: WishlistService) { }
  ngOnInit() {
    this.displayItem();
  }
  displayItem() {
    this.isLoading = true;
    setTimeout(() => {
      this.items;
      this.isLoading = false;
    }, 2000);
  }
  getProductItem(singleCardItem: any) {
    this.router.navigateByUrl(`/single-product/${singleCardItem.id}`, { state: singleCardItem });
  }
  // add to cart
  addToCart(element: any) {
    element.isCart = true;
    element.quantity = 1;
    this.addToCartService.addToCart(element);
    this.addToCartEmitter.emit(element);
  }
  getNotifyProduct(elements: any) {
    elements.isOpen = true;
  }
  isVisiable(element: any) {
    element.isCart = true;
    element.quantity = 1;
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
    this.removeWishlistEmitter.emit(item);
  }
}