import { Component, input, OnInit, computed, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `<div> Input received: {{ displayString() }}`,
})
export class ModalComponent implements OnInit {

  public modalInput = input('');
  public displayString: Signal<string> = signal('');
  
  constructor() {}

  public ngOnInit() {
    this.displayString = computed(() => this.modalInput() || "Something else");
  }

}
