import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators,ValidationErrors, ValidatorFn, FormBuilder } from '@angular/forms';
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
    private router : Router,
    private formBuilder: FormBuilder
  ) { 

  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      "nom":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "prenom":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "adresse":new FormControl(null,[Validators.required]),
      "telephone":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      "login":new FormControl(null,[Validators.required,Validators.email]),
      "password":new FormControl(null,[Validators.required]),
      "confirmPass":new FormControl(null,[Validators.required])
    }
    ,{
      validators:this.matchPassword('password','confirmPass')
    }
    )
  }

  submitData(){
    console.log(this.registerForm.value)
    this.register.saveUser(this.registerForm.value).subscribe(
      data=>{
        this.toast.success({detail:"success",summary:"votre inscription a été validée"})
        this.router.navigate(['/securite/login'])
      },
      err=> {
        console.log(err)
        this.toast.error({detail:"ERROR",summary:"votre inscription n a pas pu etre fait"})
      },
    )
   
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
  
 
  /* function password match */
   matchPassword(password:any,confirmPass:any) {
    return (formGroup:FormGroup)=>{
      const passwordcontrol = formGroup.controls[password]
      const confirmPasscontrol = formGroup.controls[confirmPass]
      if(confirmPasscontrol.errors && !confirmPasscontrol.errors['matchPassword']){
        return ;
      }
      if(confirmPasscontrol.value!==passwordcontrol.value){
        confirmPasscontrol.setErrors({matchPassword:true})
      }
      else{
        confirmPasscontrol.setErrors(null)
      }
    }
  }

}
