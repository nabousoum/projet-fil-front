import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../../shared/models/menu';

@Component({
  selector: 'ss-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input('catalogues') catalogue :Menu |null = null; 
  ngOnInit(): void {
  }

}
