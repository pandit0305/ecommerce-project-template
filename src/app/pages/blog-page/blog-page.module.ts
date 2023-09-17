import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BlogPageRoutingModule } from './blog-page-routing.module';
import { BlogPageComponent } from './blog-page.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [BlogPageComponent],
  imports: [
    CommonModule,
    BlogPageRoutingModule,
    IonicModule,
    HeaderModule,
    FooterModule
  ]
})
export class BlogPageModule { }
