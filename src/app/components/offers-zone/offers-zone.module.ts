import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersZoneComponent } from './offers-zone.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [OffersZoneComponent],
  imports: [
    CommonModule
  ],
  exports: [OffersZoneComponent]
})
export class OffersZoneModule { }
