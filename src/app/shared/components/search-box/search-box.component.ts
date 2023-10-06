import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  onValue: EventEmitter<string> = new EventEmitter();

  emitValue(input: string): void {
    if (!input) return;
    this.onValue.emit(input);
  }

}
