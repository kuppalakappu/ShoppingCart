import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() cardBody: string = '';
  @Input() cardTitle: string = '';
  @Input() cardImg: string = '';
  @Input() cardId: number = 0;
  @Output() editEvent = new EventEmitter<number>();
  editEmit(){
      this.editEvent.emit(this.cardId);
  }
}
