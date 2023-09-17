import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from './sub-header.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [SubHeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[SubHeaderComponent]
})
export class SubHeaderModule { }
