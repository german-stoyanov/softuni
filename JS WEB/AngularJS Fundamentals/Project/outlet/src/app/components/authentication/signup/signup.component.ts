import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth-service';
import { SignUpModel } from '../../../core/models/SignUpModel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: AuthService) { }

  signUp(data: SignUpModel){
    delete data['Cpassword']
    this.service.register(data).subscribe()
  }
  
  ngOnInit() {
  }

}
