import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteMapPage } from './site-map.page';

const routes: Routes = [
  {
    path: '',
    component: SiteMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteMapPageRoutingModule {}
