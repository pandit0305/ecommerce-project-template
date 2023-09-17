import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TopDealsRoutingModule } from './top-deals-routing.module';
import { TopDealsComponent } from './top-deals.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { ShopByCategoryModule } from 'src/app/components/shop-by-category/shop-by-category.module';
import { ProductModule } from 'src/app/components/product-card/product.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [TopDealsComponent],
  imports: [
    CommonModule,
    TopDealsRoutingModule,
    IonicModule,
    ShopByCategoryModule,
    HeaderModule,
    FooterModule,
    ProductModule,
  ]
})
export class TopDealsModule { }
