import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferEarnComponent } from './refer-earn.component';

const routes: Routes = [
  {
    path:'',
    component:ReferEarnComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferEarnRoutingModule { }
