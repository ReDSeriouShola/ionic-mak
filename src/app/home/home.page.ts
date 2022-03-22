import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RoomModalPage } from '../modal/room-modal/room-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {}
  
  async presentModal() {
    const modal = await this.modalController.create({
      component: RoomModalPage,
      cssClass: 'popup',
    });
    return await modal.present();
    }
  
}
