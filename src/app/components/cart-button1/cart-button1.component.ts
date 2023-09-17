import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-button1',
  templateUrl: './cart-button1.component.html',
  styleUrls: ['./cart-button1.component.scss'],
})
export class CartButton1Component implements OnInit {
  @Input() item: any;
  @Input() btnSize = false;
  constructor() {}

  ngOnInit() {}
  increaseItem(item: any) {
    item.quantity++;
  }
  decreaseItem(item: any) {
    item.quantity--;
  }
}
