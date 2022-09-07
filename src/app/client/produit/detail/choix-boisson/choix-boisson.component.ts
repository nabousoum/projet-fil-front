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
  @Output() count: EventEmitter<any> = new EventEmitter();

  constructor() { }
  newSize :number = 0
  size = 0
  testBool :boolean = false;
  
  test(idTaille:any,qte:number,idBoisson:any,value:number,stock:any,idB:any){
    this.size = value
    this.sizeChange.emit(this.size)
    let obj={
      idTaille:idTaille,
      qte:qte,
      boissonTaille:{
        idBoisson:idBoisson,
        size:this.size,
        stock:stock,
        idB:idB
      }
    }
    this.ObjectControl.emit(obj)
  }
  objectAutreBoisson(boissonTailleBoisson:any,event:any,nom:any,idBoisson:any,prix:any){
    this.size = event
    let obj2={
      boissonTailleBoisson:boissonTailleBoisson,
      quantite:this.size,
      nom:nom,
      idBoisson:idBoisson,
      prix:prix
    }
    this.ObjectControl.emit(obj2)
  }
  objectAutreFrite(event:any,idFrite:any,nom:any,prix:any){
    this.size = event
    let object={
      portionFrite:idFrite,
      quantite:this.size,
      nom:nom,
      prix:prix
    }
    this.ObjectControl.emit(object)
  }
  // test2(idBoisson:any,event:any,stock:any){
  //   this.size = event
  //   let obj2={
  //     idBoisson:idBoisson,
  //     size:this.size,
  //     stock:stock
  //   }
  //   this.ObjectControl.emit(obj2)
  // }
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