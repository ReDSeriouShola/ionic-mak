import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginModalPage } from '../modal/login-modal/login-modal.page';

@Component({
  selector: 'app-preview1',
  templateUrl: 'preview1.component.html',
  styleUrls: ['preview1.component.scss'],
})
export class Preview1Component implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: LoginModalPage,
      cssClass: 'popup',
    });
    return await modal.present();
    }
}
