import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MhgRewardsComponent } from './mhg-rewards.component';

const routes: Routes = [
  {
    path:'',component:MhgRewardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MhgRewardsRoutingModule { }
