import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SingleProductPageRoutingModule } from './single-product-routing.module';
import { SingleProductPage } from './single-product.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { BreadCrumbModule } from 'src/app/components/bread-crumb/bread-crumb.module';
import { CartButtonModule } from 'src/app/components/cart/cart-button/cart-button.module';
import { ProductModule } from 'src/app/components/product-card/product.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleProductPageRoutingModule,
    ProductModule,
    HeaderModule,
    BreadCrumbModule,
    CartButtonModule,
  ],
  declarations: [SingleProductPage],
})
export class SingleProductPageModule {}
