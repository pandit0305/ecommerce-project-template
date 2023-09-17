import { Injectable } from '@angular/core';

import { IWishlistSchema } from './wishlist.interface';
import { LocalStoreService } from '../localStore/localStore.service';


@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  wishListItems: IWishlistSchema[] = this.localStore.getData('wishlist') || [];

  constructor(private localStore: LocalStoreService) { }

  addWishlistedProduct(body: any) {
    this.wishListItems.push(body);
    this.localStore.saveData('wishlist', this.wishListItems);
    alert("Product is added in wishlist.")
  }
  getWishlistedProduct() {
    return this.localStore.getData('wishlist');
  }

  removeFromWishlist(id: any) {
    this.wishListItems = this.wishListItems.filter((res: any) => {
      return res.title !== id;
    })
    alert("Item is removed from Wishlist.")
    this.localStore.saveData('wishlist', this.wishListItems);
  }
}
