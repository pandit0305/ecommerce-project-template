import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from './bread-crumb.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [BreadCrumbComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[BreadCrumbComponent]
})
export class BreadCrumbModule { }
