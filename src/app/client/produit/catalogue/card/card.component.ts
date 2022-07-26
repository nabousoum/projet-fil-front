import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../../shared/models/menu';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'ss-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private sanitizer:DomSanitizer) { }
  @Input('catalogues') catalogue :Menu |null = null;

  ngOnInit(): void {
   
  }

}
