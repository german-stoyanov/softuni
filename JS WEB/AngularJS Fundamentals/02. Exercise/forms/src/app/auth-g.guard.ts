import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGGuard implements CanActivate {
  constructor(private route: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
    return this.check();
  }

  check(){
    if(localStorage.getItem('authtoken')){
      return true
    }else{
      this.route.navigate(['/login'])
      return false
    }
  }
}
