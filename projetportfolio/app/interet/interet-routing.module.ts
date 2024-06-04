import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InteretPage } from './interet.page';

const routes: Routes = [
  {
    path: '',
    component: InteretPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteretPageRoutingModule {}
