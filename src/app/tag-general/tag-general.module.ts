import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TagGeneralRoutingModule } from './tag-general-routing.module';

import { TagGeneralPage } from './tag-general.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TagGeneralRoutingModule
  ],
  declarations: [TagGeneralPage]
})
export class TagGeneralPageModule {}
