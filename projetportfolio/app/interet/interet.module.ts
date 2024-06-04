import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InteretPageRoutingModule } from './interet-routing.module';

import { InteretPage } from './interet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InteretPageRoutingModule
  ],
  declarations: [InteretPage]
})
export class InteretPageModule {}
