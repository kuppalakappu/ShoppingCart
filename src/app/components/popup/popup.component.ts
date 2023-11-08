import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
@Input()header:string=''
@Input()desc:string=""
@Input()id:number=0
@Output() applyEmitter=new EventEmitter<number>();
@Output() cancelEmitter=new EventEmitter<number>();
applyEmit(){
  this.applyEmitter.emit(this.id)

}

cancelEmit(){
  this.cancelEmitter.emit(this.id)

}
}
