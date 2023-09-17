import { Component, Input, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/addToCart/addToCart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss'],
})
export class CartProductComponent  implements OnInit {
  @Input() items:any=[];
  @Input() cart=true;
  @Input() checkout=false;
  constructor(private addToCartService:AddToCartService) { }

  ngOnInit() {}
  getCartItems(){
    this.items=this.addToCartService.getCartItem();
  }
  addOnWishList(item:any){
    console.log(item);
  }
  deleteItem(id:any){
    this.addToCartService.deleteCartItem(id);
    this.getCartItems();
  }
}
