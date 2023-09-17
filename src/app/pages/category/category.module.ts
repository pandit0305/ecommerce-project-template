import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { ShopByCategoryModule } from 'src/app/components/shop-by-category/shop-by-category.module';
import { BreadCrumbModule } from 'src/app/components/bread-crumb/bread-crumb.module';
import { ProductModule } from 'src/app/components/product-card/product.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    IonicModule,
    CategoryRoutingModule,
    HeaderModule,
    ProductModule,
    BreadCrumbModule,
    ShopByCategoryModule
  ]
})
export class CategoryModule { }
