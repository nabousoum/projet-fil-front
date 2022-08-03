import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { BoissonTailleBoisson, MenuTailleBoisson, TailleBoisson } from '../../shared/models/detail';
import { Produit } from '../../shared/models/produit';

@Component({
  selector: 'ss-choix-boisson',
  templateUrl: './choix-boisson.component.html',
  styleUrls: ['./choix-boisson.component.css']
})
export class ChoixBoissonComponent implements OnInit {
  @Input('boissons') boissons : TailleBoisson|null = null;
  @Input('tailleBoissons') tailleBoissons : MenuTailleBoisson|null = null;
  @Input('frites') frites : Produit|null = null;
  @Input('qteMenu') qteMenu : number = 1 ;
  @Output() sizeChange : EventEmitter<number> = new EventEmitter();

  constructor() { }
  
  size = 0;
  tailleControle(value :number){
    this.size = value
    this.sizeChange.emit(this.qteMenu);
  }
  
  ngOnInit(): void {
  }

}
