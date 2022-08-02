import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { BoissonTailleBoisson, TailleBoisson } from '../../shared/models/detail';
import { Produit } from '../../shared/models/produit';

@Component({
  selector: 'ss-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  @Input('boissonTailleBoissons') boissonTailleBoissons : BoissonTailleBoisson|null = null;
  @Input('boissons') boissons : TailleBoisson|null = null;
  @Input('frites') frites : Produit|null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
