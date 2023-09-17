import { Component, OnInit } from '@angular/core';
import { OrdersVersion2Service } from 'src/app/services/orders/orders-version2.service';

@Component({
  selector: 'app-my-orders-component',
  templateUrl: './my-orders-component.component.html',
  styleUrls: ['./my-orders-component.component.scss'],
})
export class MyOrdersComponentComponent implements OnInit {
  ordersObject!: any[];
  singleorderDetails!: any;
  productList!: any[];
  isVisible: boolean = false;
  isActive!: boolean;
  numberid!: any;

  constructor(private productService: OrdersVersion2Service) {
    this.ordersObject = productService.getOrderProducts();
    console.log(this.ordersObject);
  }

  ngOnInit() {
  }

  showOrderDetails(index: any) {
    this.numberid = index;
    this.isVisible = true;
  }

  showOrders() {
    this.isVisible = false;
  }

}
