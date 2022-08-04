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
  @Output() ObjectControl : EventEmitter<any> = new EventEmitter();
  constructor() { }
  newSize :number = 0
  size = 0
  tailleControle(value :number){
    this.size = value 
    this.sizeChange.emit(this.qteMenu);
    this.sizeChange.emit(this.size);
  }

  testBool :boolean = false;
  
  test(idTaille:any,qteClient:number,idBoisson:any,size:any){
    let obj={
      idTaille:idTaille,
      qteClient:qteClient,
      boissonTaille:{
        idBoisson:idBoisson,
        size:size,
      }
    }
    this.ObjectControl.emit(obj)
  }
  textControl():string{
    if(this.testBool==true){
      return "vous avez depassé la quantite"
    }
    return ""
  }
  ngOnInit(): void {
  }

}
 // this.newSize = this.size
      // console.log(this.newSize ,this.size)
      // if( qte<=this.newSize){
      //   this.testBool = true
      // }
      // else{
      //   this.testBool = false
      // }

      // testBool :boolean = false;
      // test(value :number,libelle:any,qte:number){
      //   if(libelle == "this.tailleBoissons?.tailleBoisson?.libelle"){
      //     alert(this.size)
      //   }
        
      // }