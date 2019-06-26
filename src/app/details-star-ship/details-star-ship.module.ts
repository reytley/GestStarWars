import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailsStarShipPage } from './details-star-ship.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsStarShipPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailsStarShipPage]
})
export class DetailsStarShipPageModule {}
