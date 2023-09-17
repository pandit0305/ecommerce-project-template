import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TopdealsPageRoutingModule } from './topdeals-routing.module';
import { TopdealsPage } from './topdeals.page';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { ProductModule } from 'src/app/components/product-card/product.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopdealsPageRoutingModule,
    HeaderModule,
    FooterModule,
    ProductModule
  ],
  declarations: [TopdealsPage],
})
export class TopdealsPageModule {}
