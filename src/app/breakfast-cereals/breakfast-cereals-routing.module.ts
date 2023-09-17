import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreakfastCerealsPage } from './breakfast-cereals.page';

const routes: Routes = [
  {
    path: '',
    component: BreakfastCerealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreakfastCerealsPageRoutingModule {}
