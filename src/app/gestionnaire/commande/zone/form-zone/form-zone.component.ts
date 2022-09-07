import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ss-form-zone',
  templateUrl: './form-zone.component.html',
  styleUrls: ['./form-zone.component.css']
})
export class FormZoneComponent implements OnInit {
  registerForm:any
  constructor(
    private fb:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      "libelle":[null,[Validators.required]],
      "prix":[null],
      quartiers: this.fb.array([
        this.fb.group({
          "quartier":[null,[Validators.required]],
        })
      ]),
    })
  }

  submitData(){
    console.log(this.registerForm.value)
    
  }

  get quartiers() {
    return this.registerForm.controls["quartiers"] as FormArray;
  }
  get quartier(){
    return this.registerForm.get('quartier')
  }

  addQuartier(){
    const quartierForm =  this.fb.group({
      "quartier":[this.quartier,[Validators.required]],
    })
    this.quartiers.push(quartierForm);
  }

  deleteQuartier(i: number) {
    this.quartiers.removeAt(i);
  }
}
