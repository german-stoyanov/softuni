import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/login';
import { AuthService } from '../sevices/authService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: LoginModel
  err: string

  constructor(public authService: AuthService,public route: Router) { 
    this.loginModel = new LoginModel('','')
  }

  login(){
    
    this.authService.login(this.loginModel).subscribe((data)=>{
      localStorage.setItem('authtoken',data['_kmd']['authtoken'])
      this.route.navigate(['/'])
    },(err)=>{
    
      this.err = err.error.error
    })
  }

  ngOnInit() {
  }

}
