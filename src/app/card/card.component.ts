import { Component, OnInit, Input } from '@angular/core';
import { CardSchema } from '../CardSchema';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: CardSchema

  constructor() { }

  ngOnInit() {
  }

  dragStart(e) {
    e.dataTransfer.setData('text', e.target.id);
  }

}
