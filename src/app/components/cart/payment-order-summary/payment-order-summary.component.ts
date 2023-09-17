import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-payment-order-summary',
  templateUrl: './payment-order-summary.component.html',
  styleUrls: ['./payment-order-summary.component.scss'],
})
export class PaymentOrderSummaryComponent  implements OnInit {
  @Input() total!:any;
  @Input() title!:string;
  @Input() button!:string;
  constructor(private menuCtrl: MenuController, private router:Router) { }

  ngOnInit() {
   
  }
  openEndMenu() {
    // Open the menu by side
    let Total = this.total+'.00';
    if(this.button==="Checkout"){
      this.menuCtrl.open('address-menu');
      localStorage.setItem('total',Total);
    }else{
      this.router.navigate(['home/cart/checkout/success'])
    }
  }
}
