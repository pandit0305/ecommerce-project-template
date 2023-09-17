import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MhgRewardsRoutingModule } from './mhg-rewards-routing.module';
import { MhgRewardsComponent } from './mhg-rewards.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { BreadCrumbModule } from 'src/app/components/bread-crumb/bread-crumb.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MhgRewardsComponent],
  imports: [
    CommonModule,
    MhgRewardsRoutingModule,
    IonicModule,
    HeaderModule,
    BreadCrumbModule
  ],
  exports:[MhgRewardsComponent]
})
export class MhgRewardsModule { }
