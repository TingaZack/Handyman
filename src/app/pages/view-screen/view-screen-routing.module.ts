import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewScreenPage } from './view-screen.page';

const routes: Routes = [
  {
    path: '',
    component: ViewScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewScreenPageRoutingModule {}
