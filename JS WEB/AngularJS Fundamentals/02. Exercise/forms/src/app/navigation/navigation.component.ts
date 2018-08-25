import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/sevices/authService';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public authService: AuthService,public route: Router) { }

  ngOnInit() {
  }

  logout(){
    
    this.authService.logout().subscribe((data)=>{
      localStorage.clear();
      this.route.navigate(['/login'])
    },err=>{
      console.log(err)
    })
  }

}
