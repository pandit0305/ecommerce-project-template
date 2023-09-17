import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwoHrDeliveryWindowPageRoutingModule } from './two-hr-delivery-window-routing.module';

import { TwoHrDeliveryWindowPage } from './two-hr-delivery-window.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    FooterModule,
    TwoHrDeliveryWindowPageRoutingModule
  ],
  declarations: [TwoHrDeliveryWindowPage]
})
export class TwoHrDeliveryWindowPageModule {}
