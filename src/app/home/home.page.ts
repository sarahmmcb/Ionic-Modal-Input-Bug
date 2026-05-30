import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, ModalController } from '@ionic/angular/standalone';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  private modalCtrl: ModalController = inject(ModalController);
  
  
  constructor() {}


    public async openModal(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        modalInput: 'Did you receive this?'
      }
    });

    await modal.present();
  }
}
