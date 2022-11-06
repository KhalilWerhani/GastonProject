import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public LoginForm !: FormGroup
  constructor(private formbuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.LoginForm = this.formbuilder.group({
      email:[''],
      password:['']
    })
  }
login(){
  this.http.get<any>("http://localhost:3000/SignupUsers")
  .subscribe(res=>{
    const user = res.find((a:any)=>{
      return a.email === this.LoginForm.value.email && a.password === this.LoginForm.value.password
    });
    if(user){
      alert("login suucess");
      this.LoginForm.reset();
      this.router.navigate(['sidenav'])
    }else{
      alert("user not found");
    }
  },err=>{
    alert("something went wrong")
  })
}
}
