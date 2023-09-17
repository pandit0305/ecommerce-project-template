import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreakfastCerealsPageRoutingModule } from './breakfast-cereals-routing.module';

import { BreakfastCerealsPage } from './breakfast-cereals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreakfastCerealsPageRoutingModule
  ],
  declarations: [BreakfastCerealsPage]
})
export class BreakfastCerealsPageModule {}
