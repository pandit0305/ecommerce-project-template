import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
// import { NotifyRequestProductComponent } from './notify-request-product.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [],
  imports: [
    CommonModule,
    IonicModule
  ],
  // exports:[NotifyRequestProductComponent]
})
export class NotifyRequestProductModule { }
