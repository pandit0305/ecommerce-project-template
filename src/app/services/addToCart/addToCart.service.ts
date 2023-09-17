import { Injectable } from '@angular/core';
import { LocalStoreService } from '../localStore/localStore.service';

@Injectable({
    providedIn: 'root'
})
export class AddToCartService {
    cartItems: any = this.localStore.getData('addToCart') || [];
    constructor(private localStore: LocalStoreService) { };

    addToCart(body: any) {
        this.cartItems.push(body);
        this.localStore.saveData('addToCart', this.cartItems);
        alert("Item is aaded to cart.")
    }
    getCartItem() {
        return this.localStore.getData('addToCart');
    }

    deleteCartItem(id: any) {
        this.cartItems = this.cartItems.filter((res: any) => {
            return res.id !== id;
        })
        alert("Item is deleted successfull.")
        this.localStore.saveData('addToCart', this.cartItems);
    }
}
