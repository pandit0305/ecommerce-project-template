import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FruitsPageRoutingModule } from './fruits-routing.module';

import { FruitsPage } from './fruits.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { BreadCrumbModule } from 'src/app/components/bread-crumb/bread-crumb.module';
import { ProductModule } from 'src/app/components/product-card/product.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FruitsPageRoutingModule,
    ProductModule,
    HeaderModule,
    FooterModule,
    BreadCrumbModule
  ],
  declarations: [FruitsPage],
})
export class FruitsPageModule {}
