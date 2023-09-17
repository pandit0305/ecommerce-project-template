import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DairyProductsPage } from './dairy-products.page';

const routes: Routes = [
  {
    path: '',
    component: DairyProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DairyProductsPageRoutingModule {}
