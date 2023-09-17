import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwoHrDeliveryWindowPage } from './two-hr-delivery-window.page';

const routes: Routes = [
  {
    path: '',
    component: TwoHrDeliveryWindowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwoHrDeliveryWindowPageRoutingModule {}
