import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth-service';
import { SignInModel } from '../../../core/models/SignInModel';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private service: AuthService) { }

  signIn(data: SignInModel){
   this.service.login(data).subscribe()
  }

  ngOnInit() {
  }

}
