import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [BannerComponent],
  imports: [
    CommonModule,
  ],
  exports:[BannerComponent]
})
export class BannerModule { }
