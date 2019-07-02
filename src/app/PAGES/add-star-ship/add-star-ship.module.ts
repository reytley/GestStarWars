import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddStarShipPage } from './add-star-ship.page';

const routes: Routes = [
  {
    path: '',
    component: AddStarShipPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddStarShipPage]
})
export class AddStarShipPageModule {}
