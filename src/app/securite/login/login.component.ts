import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICredential, IToken } from '../shared/models/Icredentials';
import { AuthServService } from '../shared/services/auth-serv.service';
import { TokenService } from '../shared/services/token.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'ss-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:ICredential={
    login:'',
    password:''
  }
  
  constructor(
    private authServ : AuthServService,
    private tokenService: TokenService,
    private toast: NgToastService,
    ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    //console.log(this.form);
    this.authServ.login(this.form).subscribe(
      data=>{
        console.log(data.token)
        this.tokenService.saveToken(data.token)
        this.toast.success({detail:"success",summary:"connexion reussie"})
      },
      err=>{
        console.log(err)
        this.toast.error({detail:"ERROR",summary:"login ou mot de passe incorrect"})
      },
    )
  }

}
