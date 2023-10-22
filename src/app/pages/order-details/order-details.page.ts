import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  breadCrumbs:IBreadCrumbSchema={url:'/order-details',title:'Order Details'}

  orderDetailsObject :any = this.location.getState();
  
  constructor(private router: Router, private location: Location) {

  }

  ngOnInit(): void {
    console.log(this.orderDetailsObject);
    console.log(this.orderDetailsObject.items);
  }

}