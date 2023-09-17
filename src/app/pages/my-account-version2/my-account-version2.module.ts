import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAccountVersion2PageRoutingModule } from './my-account-version2-routing.module';

import { MyAccountVersion2Page } from './my-account-version2.page';
import { AccountInfoModule } from 'src/app/components/my-account-component/account-info/account-info.module';
import { MyOrdersComponentModule } from 'src/app/components/my-account-component/my-orders-component/my-orders-component.module';
import { AddAddressesModalVersion2Component} from 'src/app/components/my-account-component/add-addresses-modal-version2/add-addresses-modal-version2.component';
import { DeliveryAddressesVersion2Component } from 'src/app/components/my-account-component/delivery-addresses-version2/delivery-addresses-version2.component';
import { EditAddressModalVersion2Component } from 'src/app/components/my-account-component/edit-address-modal-version2/edit-address-modal-version2.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { BreadCrumbModule } from 'src/app/components/bread-crumb/bread-crumb.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MyAccountVersion2PageRoutingModule,
    AccountInfoModule,
    MyOrdersComponentModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
    BreadCrumbModule
  ],
  declarations: [MyAccountVersion2Page,DeliveryAddressesVersion2Component,AddAddressesModalVersion2Component,EditAddressModalVersion2Component]
})
export class MyAccountVersion2PageModule {}
