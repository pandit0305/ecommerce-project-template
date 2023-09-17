import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsAndConditionPageRoutingModule } from './terms-and-condition-routing.module';

import { TermsAndConditionPage } from './terms-and-condition.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { BreadCrumbModule } from 'src/app/components/bread-crumb/bread-crumb.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FooterModule,
    IonicModule,
    HeaderModule,
    TermsAndConditionPageRoutingModule,
    BreadCrumbModule
  ],
  declarations: [TermsAndConditionPage]
})
export class TermsAndConditionPageModule {}
