import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../../models/register';
import { AuthService } from '../sevices/authService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerModel: RegisterModel
  err: string
  constructor(public authService: AuthService, public route: Router) {
    this.registerModel = new RegisterModel('','','','','','',18)
  }

  register(){
    let data = this.registerModel;
    this.authService.register(data).subscribe(data=>{
      console.log(data)
      localStorage.setItem('authtoken',data['_kmd']['authtoken'])
      this.route.navigate(['/'])
   
    },err=>{
      this.err = err.error.error
    })
  }

  ngOnInit() {
  }

}
