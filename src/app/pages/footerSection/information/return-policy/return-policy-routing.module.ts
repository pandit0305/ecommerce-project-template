import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReturnPolicyPage } from './return-policy.page';

const routes: Routes = [
  {
    path: '',
    component: ReturnPolicyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReturnPolicyPageRoutingModule {}
