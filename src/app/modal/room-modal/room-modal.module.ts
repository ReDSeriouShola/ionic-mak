import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomModalPageRoutingModule } from './room-modal-routing.module';

import { RoomModalPage } from './room-modal.page';

/* Font Awesome */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    RoomModalPageRoutingModule
  ],
  declarations: [RoomModalPage]
})
export class RoomModalPageModule {}
