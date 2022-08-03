import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { BoissonTailleBoisson, TailleBoisson } from '../../shared/models/detail';
import { Produit } from '../../shared/models/produit';

@Component({
  selector: 'ss-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  @Input('boissonTailleBoisson') boissonTailleBoisson : BoissonTailleBoisson|null = null;
  @Input('boissons') boissons : TailleBoisson|null = null;
  @Input('frites') frites : Produit|null = null;
  @Input('boisson') boisson : BoissonTailleBoisson|null = null;

  @Output() sizeChange : EventEmitter<number> = new EventEmitter();

  constructor() { }
  fontSizePx = 0;
  size = 0

  tailleControle(value :number){
    this.size = value
    //alert(this.size)
    this.sizeChange.emit(this.size)
  }

  ngOnInit(): void {
  }

}
