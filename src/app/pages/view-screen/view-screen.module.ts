import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewScreenPageRoutingModule } from './view-screen-routing.module';

import { ViewScreenPage } from './view-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewScreenPageRoutingModule
  ],
  declarations: [ViewScreenPage]
})
export class ViewScreenPageModule {}
