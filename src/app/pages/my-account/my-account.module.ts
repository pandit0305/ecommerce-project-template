import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAccountPageRoutingModule } from './my-account-routing.module';

import { MyAccountPage } from './my-account.page';
import { AccountInfoModule } from 'src/app/components/my-account-component/account-info/account-info.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { MyOrdersModule } from 'src/app/components/my-account-component/my-orders/my-orders.module';
import { EditAddressModalComponent } from 'src/app/components/my-account-component/edit-address-modal/edit-address-modal.component';
import { AddAddressModalComponent } from 'src/app/components/my-account-component/add-addresses-modal/add-address-modal.component';
import { deliveryAddressesComponent } from 'src/app/components/my-account-component/delivery-addresses/delivery-addresses.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { MyOrdersComponentComponent } from 'src/app/components/my-account-component/my-orders-component/my-orders-component.component';
import { MyOrdersComponentModule } from 'src/app/components/my-account-component/my-orders-component/my-orders-component.module';
import { BreadCrumbModule } from 'src/app/components/bread-crumb/bread-crumb.module';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAccountPageRoutingModule,
    AccountInfoModule,
    HeaderModule,
    MyOrdersModule,
    FormsModule,
    ReactiveFormsModule,
    FooterModule,
    BreadCrumbModule
    // MyOrdersComponentModule
  ],
  declarations: [MyAccountPage,deliveryAddressesComponent,EditAddressModalComponent,AddAddressModalComponent]
})
export class MyAccountPageModule {}
