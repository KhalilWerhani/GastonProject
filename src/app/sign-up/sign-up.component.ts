import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signupForm !: FormGroup
  constructor(private formbuilder : FormBuilder,private HTTP : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      fullname:[''],
      email:[''],
      mobile:[''],
      password:['']
    })
  }
signUp(){
this.HTTP.post<any>("http://localhost:3000/SignupUsers",this.signupForm.value)
.subscribe(res=>{
  alert("signUp succsefully");
  this.signupForm.reset();
  this.router.navigate(['Login']);
}, err=>{
  alert("Something went wrong")
  })
}
}
