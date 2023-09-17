import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BreadCrumbModule } from 'src/app/components/bread-crumb/bread-crumb.module';
import { WishlistPageRoutingModule } from './wishlist-routing.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { ProductModule } from 'src/app/components/product-card/product.module';
import { CartButtonModule } from 'src/app/components/cart/cart-button/cart-button.module';
import { WishlistPage } from './wishlist.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [WishlistPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    WishlistPageRoutingModule,
    ProductModule,
    BreadCrumbModule,
    CartButtonModule
  ],
})
export class WishlistPageModule {}