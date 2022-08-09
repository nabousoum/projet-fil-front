import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ss-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:any={
    login:null,
    password:null
  }
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.form);
    this.http.post('http://127.0.0.1:8000/api/login_check',this.form).subscribe(
        data =>console.log(data),
        err=> console.log(err),
    )
  }

}
