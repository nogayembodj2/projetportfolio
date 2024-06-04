import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NousPage } from './nous.page';

const routes: Routes = [
  {
    path: '',
    component: NousPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NousPageRoutingModule {}
