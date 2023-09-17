import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecentOrderComponent } from './recent-order.component';
import { RecentOrderRoutingModule } from './recent-order-routing.module';
import { BreadCrumbModule } from 'src/app/components/bread-crumb/bread-crumb.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { NotifyRequestProductComponent } from 'src/app/components/notifyRequestProduct/notify-request-product.component';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [RecentOrderComponent, NotifyRequestProductComponent],
  imports: [
    CommonModule,
    RecentOrderRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    BreadCrumbModule,
    HeaderModule,
  ]
})
export class RecentOrderModule { }