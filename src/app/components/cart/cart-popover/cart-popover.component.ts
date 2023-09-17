import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonPopover, MenuController } from '@ionic/angular';
import { AddToCartService } from 'src/app/services/addToCart/addToCart.service';



@Component({
  selector: 'app-cart-popover',
  templateUrl: './cart-popover.component.html',
  styleUrls: ['./cart-popover.component.scss'],
})
export class CartPopoverComponent implements OnInit {
  @ViewChild(IonPopover) popOver!: IonPopover;
  items: any = [];
  constructor(private router: Router, private menuController: MenuController, private addToCartService:AddToCartService) { }

  ngOnInit() { 
    this.getCartItems();
  }
  get total() {
    return this.items?.map((res: any) => {
      return res.price * res.quantity
    }).reduce((acc: any, i: any) => {
      return acc + i;
    }, 0)
  }
  getCartItems(){
    this.items=this.addToCartService.getCartItem();

  }
  onClose() {
    this.menuController.close('end');
  }
  gotoCart() {
    this.router.navigate(['home/cart']);
    this.menuController.close('end');

  }
  gotoDetailPage(singleCardItem: any) {
    this.router.navigateByUrl(`/single-product/${singleCardItem.id}`, {
      state: singleCardItem,
    });
  }
  deleteItem(id: any) {
    this.addToCartService.deleteCartItem(id);
    this.getCartItems();
  }
  loadCartItems(){
    this.getCartItems();
  }
}