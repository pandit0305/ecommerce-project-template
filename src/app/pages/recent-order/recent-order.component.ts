import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IBreadCrumbSchema } from 'src/app/components/bread-crumb/bread-crumb.component';
import { NotifyRequestProductComponent } from 'src/app/components/notify-request-product/notify-request-product.component';
import { RecentOrderService } from 'src/app/services/recentOrder/recentOrder.service';

@Component({
  selector: 'app-recent-order',
  templateUrl: './recent-order.component.html',
  styleUrls: ['./recent-order.component.scss'],
})
export class RecentOrderComponent implements OnInit {
  breadCrumbs: IBreadCrumbSchema = { url: '/home/recent-order', title: 'Recent Order Products' };
  recentOrderProducts: any = [];
  recentOrderForm: any;
  date='';
  modelData: any;
  constructor(private recentOrderService: RecentOrderService,public modalController: ModalController, private fb: FormBuilder) {
    this.initForm()
  }

  ngOnInit() {
    this.recentOrderProducts = this.recentOrderService.recentOrder();
  }
  initForm() {
    this.recentOrderForm = this.fb.group({
      fromDate: [''],
      toDate: [''],
      lastNOrders: [0]
    })
  }
  search() {
    console.log(this.recentOrderForm.value)
  }
  getFromDate() {
    // date
  }
  getToDate() {
    //date
  }
  onClickCart(item:any){
    item.isCart=true;
    item.isLoading=true;
    setTimeout(() => {
      item.isLoading=false;
    }, 2000);
  }
  async notifyProduct(item:any) {
    console.log(item)
    const modal = await this.modalController.create({
      component: NotifyRequestProductComponent,
      componentProps: {
        'name': item?.name
      }
    });
    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
      }
    });
    return await modal.present();
  }
}
