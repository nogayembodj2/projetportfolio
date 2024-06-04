import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NousPageRoutingModule } from './nous-routing.module';

import { NousPage } from './nous.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NousPageRoutingModule
  ],
  declarations: [NousPage]
})
export class NousPageModule {}
