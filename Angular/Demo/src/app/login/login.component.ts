import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  emailId : string;
  password: string;

  constructor(){
    this.emailId = "rakeshreddykalagiri@gmail.com";
    this.password = "1234567";
  }

  ngOnInit() {
    
  }

  Submit(){
    console.log(this.emailId);
    console.log(this.password);
  }

}