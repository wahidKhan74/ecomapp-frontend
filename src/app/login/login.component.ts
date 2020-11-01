import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public email:string ="";
  public password:string="";

  public isHidden :boolean = false;

  public isActive :boolean = true;

  public user ={
    email:'',password:''
  }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.user);
    
    // console.log(` Email : ${this.email} and Password : ${this.password}`);
    
  }
}
