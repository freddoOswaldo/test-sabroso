import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  username = new FormControl('',Validators.required);
  validation = false;
  constructor(private router:Router) { }

  login(){
    if(this.username.invalid){
      this.validation=true;
      return;
    }
    localStorage.setItem('username',this.username.value);
    this.validation=false;
    this.router.navigate(['cart']);
  }

  keyDown(){
    this.validation=false;
  }

}
