import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  breadCrumbs:IBreadCrumbSchema={url:'/my-orders',title:'My Orders'}

  products: any[];

  constructor(private router: Router, private ordersServiceObject: OrdersService) {
    this.products = ordersServiceObject.getOrderProducts();
    console.log(this.products);
  }
  ngOnInit(): void {
  }

  onNextClicked(od: any) {
    console.log(od)
    console.log(od.id)
    this.router.navigateByUrl(`/order-details`, { state: od });
  }
}


