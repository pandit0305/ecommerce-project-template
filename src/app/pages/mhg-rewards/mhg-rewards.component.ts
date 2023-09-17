import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';
import { OrderHistoryService } from 'src/app/services/orderHistory/order.service';

@Component({
  selector: 'app-mhg-rewards',
  templateUrl: './mhg-rewards.component.html',
  styleUrls: ['./mhg-rewards.component.scss'],
})
export class MhgRewardsComponent  implements OnInit {
  breadCrumbs:IBreadCrumbSchema={url:'mhg-rewards',title:'MHG Rewards'};
  usageHistory:any=[];

  constructor(private orderHistoryService: OrderHistoryService) { }

  ngOnInit() {
    this.usageHistory=this.orderHistoryService.orderHistory();
    
  }

}
