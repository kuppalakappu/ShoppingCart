import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
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
constructor(private router:Router){}
  editEmit(){
    this.router.navigate(['/updateProduct/'+this.cardId])
  }
}
