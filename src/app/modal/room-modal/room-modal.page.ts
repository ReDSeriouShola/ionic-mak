import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-room-modal',
  templateUrl: './room-modal.page.html',
  styleUrls: ['./room-modal.page.scss'],
})
export class RoomModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalController.dismiss();
  }
}
