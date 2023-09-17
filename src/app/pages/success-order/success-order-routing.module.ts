import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessOrderComponent } from './success-order.component';

const routes: Routes = [
  {
    path:'',
    component:SuccessOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuccessOrderRoutingModule { }
