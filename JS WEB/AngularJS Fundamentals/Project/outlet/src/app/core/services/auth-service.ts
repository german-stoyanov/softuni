import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInModel } from '../models/SignInModel';
import { SignUpModel } from '../models/SignUpModel';




const appKey = "kid_rk6IN3LUm"
const appSecret = "e1d95d34d9294f1085042343ebda7dc9"
const kinveyBaseUrl = "https://baas.kinvey.com/";

const loginUrl = kinveyBaseUrl+'user'+"/"+appKey+'/login';
const logoutUrl = kinveyBaseUrl+'user'+"/"+appKey+'/_logout';
const registerUrl = kinveyBaseUrl+'user'+"/"+appKey;
@Injectable()
export class AuthService {
  constructor(private http : HttpClient) {  }

  login(body) {
    return this.http.post<SignInModel>(loginUrl, body);
  }

  register(body) {
    return this.http.post<SignUpModel>(registerUrl, body);
  }

  logout(){
    return this.http.post(logoutUrl, '');
  }

  isLogged(){
    if(sessionStorage.getItem('username')){
      return true
    }else{
      return false
    }
  }

  isAdmin(){
    if(sessionStorage.getItem('username')==="admin"){
      return true
    }else{
      return false
    }
  }

  getUsername(){
    return sessionStorage.getItem('username')
  }
}