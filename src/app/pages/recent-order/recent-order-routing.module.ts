import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecentOrderComponent } from './recent-order.component';

const routes: Routes = [
  {
    path:'',
    component:RecentOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecentOrderRoutingModule { }
