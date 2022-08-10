import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators,ValidationErrors, ValidatorFn } from '@angular/forms';
import { RegisterService } from '../shared/services/register.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
@Component({
  selector: 'ss-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:any


  constructor(
    private register: RegisterService,
    private toast: NgToastService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "nom":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "prenom":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "adresse":new FormControl(null,[Validators.required]),
      "telephone":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      "login":new FormControl(null,[Validators.required,Validators.email]),
      "password":new FormControl(null,[Validators.required]),
      "confirmPass":new FormControl(null,[Validators.required])
    }
    )
  }

  submitData(){
    console.log(this.registerForm.value)
    this.register.saveUser(this.registerForm.value).subscribe(
      err=> console.log(err),
    )
    this.toast.success({detail:"success",summary:"votre inscription a été validée"})
    this.router.navigate(['/securite/login'])
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
  
  MustMatch(controlName:string,matchingControlName:string){

  }
}
