import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BoissonTailleBoisson, MenuTailleBoisson, TailleBoisson, TailleBoissonMenu } from '../../shared/models/detail';
import { Produit } from '../../shared/models/produit';
import { EventService } from '../../shared/services/event.service';

@Component({
  selector: 'ss-card-count',
  templateUrl: './card-count.component.html',
  styleUrls: ['./card-count.component.css']
})
export class CardCountComponent implements OnInit {
  
  @Output() disabled: EventEmitter<any> = new EventEmitter();
  @Output() count: EventEmitter<any> = new EventEmitter();
  @Output() sizeChange : EventEmitter<any> = new EventEmitter();
  
  @Input()  size: number = 0;
  @Input('boissonTailleBoissons') boissonTailleBoissons : BoissonTailleBoisson|null = null;
  @Input('produits') produits :Produit|null = null;
  @Input('boisson') boisson : TailleBoisson|null = null;
  @Input('frites') frites : Produit|null = null;

  constructor() { }

  /* fonction de controle de la taille choisie dans le menu*/

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(1, +this.size + delta));
    this.sizeChange.emit(this.size)
  }

  /* fonction de desactivation de bouton */
  disabled_attr = false
  testDisabled(event :any){
    const value  = event.target.value;
    if(value == 0 ){
      this.disabled_attr = true
      this.disabled.emit(this.disabled_attr)
    }
    if(value != 0){
      this.disabled_attr = false
      this.disabled.emit(this.disabled_attr)
    }
  }

  /*fonction de desactivation de bouton  pour la taille*/ 
  tailleDisabled(event: any){
    const value  = event.target.value;
    if(value >4 ){
      this.disabled_attr = true
      this.disabled.emit(this.disabled_attr)
    }
    else{
      this.disabled_attr = false
      this.disabled.emit(this.disabled_attr)
    }
  }

  
  /* fonction du controle de la quantite */
  number :number = 1 
  validateNumber() :string{
    if(this.number == 0){
      return "la quantite choisie doit etre superieure ou egal a 1"
    }
    return ""
  }
  ngOnInit(): void {
    
  }

}
