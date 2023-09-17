import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-success-order',
  templateUrl: './success-order.component.html',
  styleUrls: ['./success-order.component.scss'],
})
export class SuccessOrderComponent  implements OnInit {
  breadCrumbs:IBreadCrumbSchema={url:'/home/cart/checkout/success',title:"Success"};
  isOrder!:boolean;
  constructor(private router:Router) { }

  ngOnInit() {}
  gotoOrderHistory(){
    this.isOrder=true;
    this.router.navigate(['home/cart'])
  }
}
