import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Catalogue } from '../../shared/models/catalogue';
import { Produit } from '../../shared/models/produit';

@Component({
  selector: 'ss-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private sanitizer:DomSanitizer) { }
  @Input('catalogues') catalogue :Produit |undefined = undefined;

  ngOnInit(): void {
   
  }

}
