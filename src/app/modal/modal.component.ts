import { Component, input } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `<div> Input received: {{ modalInput() }}`,
})
export class ModalComponent {

  public modalInput = input('');
  
  constructor() {}

}
