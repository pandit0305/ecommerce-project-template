import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

const COMPONENTS=[];
const MODULES=[CommonModule, IonicModule]
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [],
  imports: [
    ...MODULES
  ]
})
export class SharedModule { }
