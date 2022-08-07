import { Component, Input, OnInit } from '@angular/core';
import { Detail } from 'src/app/client/produit/shared/models/detail';

@Component({
  selector: 'ss-ligne-panier',
  templateUrl: './ligne-panier.component.html',
  styleUrls: ['./ligne-panier.component.css']
})
export class LignePanierComponent implements OnInit {
  @Input() isPanier = true;
  @Input('item') item : Detail |null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
