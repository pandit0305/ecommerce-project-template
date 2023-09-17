import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopDealsComponent } from './top-deals.component';

const routes: Routes = [
  {
    path:'',
    component:TopDealsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopDealsRoutingModule { }
