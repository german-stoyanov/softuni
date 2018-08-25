import { Injectable } from "@angular/core";

import { LoginModel } from "../../models/login";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RegisterModel } from "../../models/register";

const appKey = "kid_r186g5mm7" 
const appSecret = "c6c9470ea74a43e6b08575a856416dd6" 
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable()
export class AuthService {
    constructor(private http:  HttpClient) {}

    private cH(type: string){
        if(type === "Basic"){
            return new HttpHeaders({
                'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                'Content-Type': 'application/json'
            })
        } else{
            return new HttpHeaders({
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                'Content-Type': 'application/json'
            })

        }
    }

    isLogged(){
        if(localStorage.getItem('authtoken')){
            return true
        }
        else{
            return false
        }
    }

    login(model: LoginModel){
        return this.http.post(loginUrl, JSON.stringify(model),{headers: this.cH('Basic')})
    }

    logout (){
        return this.http.post(logoutUrl, {},{headers: this.cH('Kinvey')})
    }

    register(model: RegisterModel){
        return this.http.post(registerUrl, JSON.stringify(model),{headers: this.cH('Basic')})
    }
}
