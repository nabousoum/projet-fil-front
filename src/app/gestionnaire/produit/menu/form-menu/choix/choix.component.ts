import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TailleBoisson } from 'src/app/client/produit/shared/models/detail';
import { Produit } from 'src/app/client/produit/shared/models/produit';

@Component({
  selector: 'ss-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.css']
})
export class ChoixComponent implements OnInit {
  @Input ('catas') catas: any|null= null
  @Input('tailles') tailles: any|null = null
  @Input('frites') frites: any|null = null
  @Input('i') i: any
  @Input() form: any;
  @Output() remove: EventEmitter<any> = new EventEmitter();

  deleteTaille(lessonIndex: number) {
    this.remove.emit(lessonIndex)
  }
  deleteBurger(lessonIndex: number) {
    this.remove.emit(lessonIndex)
  }
  deleteFrite(lessonIndex: number) {
    this.remove.emit(lessonIndex)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
