import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet, ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {

  private modalCtrl: ModalController = inject(ModalController);
  constructor() {}
}
