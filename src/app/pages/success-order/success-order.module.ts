import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SuccessOrderRoutingModule } from './success-order-routing.module';
import { SuccessOrderComponent } from './success-order.component';
import { BreadCrumbModule } from 'src/app/components/bread-crumb/bread-crumb.module';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [SuccessOrderComponent],
  imports: [
    CommonModule,
    SuccessOrderRoutingModule,
    IonicModule,
    BreadCrumbModule,
    HeaderModule
  ],
})
export class SuccessOrderModule { }
