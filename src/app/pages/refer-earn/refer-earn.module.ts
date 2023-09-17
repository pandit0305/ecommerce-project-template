import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReferEarnComponent } from './refer-earn.component';
import { ReferEarnRoutingModule } from './refer-earn-routing.module';
import { BreadCrumbModule } from 'src/app/components/bread-crumb/bread-crumb.module';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ReferEarnComponent],
  imports: [
    CommonModule,
    ReferEarnRoutingModule,
    IonicModule,
    BreadCrumbModule,
    HeaderModule
  ]
})
export class ReferEarnModule { }
