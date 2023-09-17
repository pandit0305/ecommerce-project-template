import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss'],
})
export class CartButtonComponent implements OnInit {
  @Input() item: any;
  @Input() btnSize = false;
  constructor() {}

  ngOnInit() {}
  increaseItem(item: any) {
    item.quantity++;
  }
  decreaseItem(item:any){
    item.quantity--;
  }
}
