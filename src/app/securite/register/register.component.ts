import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ss-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:any


  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "nom":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "prenom":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "adresse":new FormControl(null,[Validators.required]),
      "telephone":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      "login":new FormControl(null,[Validators.required,Validators.email]),
      "password":new FormControl(null,[Validators.required]),
      "confirmPass":new FormControl(null,[Validators.required])

    })
  }

  submitData(){
    console.log(this.registerForm.value)
  }
  get nom(){
    return this.registerForm.get('nom')
  }
  get prenom(){
    return this.registerForm.get('prenom')
  }
  get login(){
    return this.registerForm.get('login')
  }
  get telephone(){
    return this.registerForm.get('telephone')
  }
  get adresse(){
    return this.registerForm.get('adresse')
  }
  get password(){
    return this.registerForm.get('password')
  }
  get confirmPass(){
    return this.registerForm.get('confirmPass')
  }
  passwordConfirming(c: AbstractControl): boolean  {
    
   return false
  }
}
