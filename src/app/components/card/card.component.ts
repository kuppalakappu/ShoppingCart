import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() cardBody: string = '';
  @Input() cardStyle: string ='';
  @Input() cardTitle: string = '';
  @Input() cardImg: string = '';
  @Input() cardId: number = 0;
  @Input() hideEdit?: boolean = false;
  @Output() editEmitter=new EventEmitter<number>();
  @Output() cardEmitter=new EventEmitter<number>();
  @Output() deleteEmitter=new EventEmitter<number>();
constructor(private router:Router){}
  editEmit(){
    this.editEmitter.emit(this.cardId)
 
  }

  deleteEmit(){
    this.deleteEmitter.emit(this.cardId)
 
  }


  cardEmit(){
    this.cardEmitter.emit(this.cardId)
 
  }
}
