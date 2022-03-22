import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Preview1Component } from './preview1.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Preview1ComponentRoutingModule } from './preview1-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Preview1ComponentRoutingModule,ScrollingModule
  ],
  declarations: [
    Preview1Component,
    //RoomModalPage
  ],
  entryComponents:[
    //RoomModalPage
  ]
})
export class Preview1ComponentModule {}
