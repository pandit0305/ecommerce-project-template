import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacyPolicyPageRoutingModule } from './privacy-policy-routing.module';

import { PrivacyPolicyPage } from './privacy-policy.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { BreadCrumbModule } from 'src/app/components/bread-crumb/bread-crumb.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterModule,
    HeaderModule,
    PrivacyPolicyPageRoutingModule,
    BreadCrumbModule
  ],
  declarations: [PrivacyPolicyPage]
})
export class PrivacyPolicyPageModule {}
