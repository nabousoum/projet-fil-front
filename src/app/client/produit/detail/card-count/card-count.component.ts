import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ss-card-count',
  templateUrl: './card-count.component.html',
  styleUrls: ['./card-count.component.css']
})
export class CardCountComponent implements OnInit {
  @Output() disabled: EventEmitter<any> = new EventEmitter();
  disabled_attr = false
  testDisabled(event :any){
    const value  = event.target.value;
    if(value == 0){
      this.disabled_attr = true
      this.disabled.emit(this.disabled_attr)
    }
    if(value != 0){
      this.disabled_attr = false
      this.disabled.emit(this.disabled_attr)
    }
  }
  number :number = 1 
  validateNumber() :string{
    if(this.number == 0){
      return "la quantite choisie doit etre superieure ou egal a 1"
    }
    return ""
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
