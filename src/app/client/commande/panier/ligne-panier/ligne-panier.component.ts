import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Detail } from 'src/app/client/produit/shared/models/detail';
import { Produit } from 'src/app/client/produit/shared/models/produit';
import { BurgerCommande, MenuCommande, Panier } from '../../shared/models/panier';

@Component({
  selector: 'ss-ligne-panier',
  templateUrl: './ligne-panier.component.html',
  styleUrls: ['./ligne-panier.component.css']
})
export class LignePanierComponent implements OnInit {
  @Output() index: EventEmitter<any> = new EventEmitter();
  @Output() MontantTotal: EventEmitter<any> = new EventEmitter();
  @Input() isPanier = true;
  @Input('item') item : BurgerCommande | null=null;
  @Input('itemMenu') itemMenu : MenuCommande | null=null;
  //@Input('i') i : number = 0
  constructor() { }
  
  // onDelete(i:any){
  //     //alert(i)
  //   this.index.emit(i);
  // }
  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  size:number = 0
  resize(delta: number) {
    this.size = Math.min(40, Math.max(1, +this.size + delta));
    
  }
  getPrixBurger(data:any){
    let prix = data.burger.prix * (data.quantite+this.size)
    return prix
  }
  getPrixMenu(data:any){
    let prix = data.menu.prix * (data.quantite+this.size)
    return prix
  }
  delete(event:any){
    //alert(event.nom)
    this.index.emit(event)
  }
   qte:number = 0
  value(event :any){
    //alert(event.target.value)
    this.qte = event.target.value
  }
  ngOnInit(): void {
  }

}
