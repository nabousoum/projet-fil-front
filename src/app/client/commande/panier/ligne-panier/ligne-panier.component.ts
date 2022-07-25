import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ss-ligne-panier',
  templateUrl: './ligne-panier.component.html',
  styleUrls: ['./ligne-panier.component.css']
})
export class LignePanierComponent implements OnInit {
  @Input() isPanier = true;
  constructor() { }

  ngOnInit(): void {
  }

}
