import { Injectable } from '@angular/core';
import { CanActivate ,Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(){
    if(localStorage.getItem('username')!=null && localStorage.getItem('username')!='' ){
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
  
}
