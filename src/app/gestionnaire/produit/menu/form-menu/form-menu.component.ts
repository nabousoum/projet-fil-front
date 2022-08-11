import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators,ValidationErrors, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'ss-form-menu',
  templateUrl: './form-menu.component.html',
  styleUrls: ['./form-menu.component.css']
})
export class FormMenuComponent implements OnInit {

  panleExpanded = true;
  panleExpanded2 = true;
  panleExpanded3 = true;

  registerForm:any

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "nom":new FormControl(null),
      "prix":new FormControl(null),
      "image":new FormControl(null),
      "description":new FormControl(null),
      "nomBurger":new FormControl(null),
      "qteBurger":new FormControl(null),
      "nomBoisson":new FormControl(null),
      "qteBoisson":new FormControl(null),
      "nomFrites":new FormControl(null),
      "qteFrites":new FormControl(null)
    }
    )
  }

  submitData(){
    console.log(this.registerForm.value)
  }

}
