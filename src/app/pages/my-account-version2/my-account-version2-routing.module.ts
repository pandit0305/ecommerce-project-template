import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAccountVersion2Page } from './my-account-version2.page';

const routes: Routes = [
  {
    path: '',
    component: MyAccountVersion2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAccountVersion2PageRoutingModule {}
