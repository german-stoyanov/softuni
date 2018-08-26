import {
    HttpResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    
} from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { tap } from "rxjs/operators"
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

const appKey = 'kid_rk6IN3LUm'
const appSecret = 'e1d95d34d9294f1085042343ebda7dc9'
const masterSecret = '357a6a9d511b49509aa578acf39e1cb7'




@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private router: Router, private toastr: ToastrService){

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
      


        if(request.url.endsWith('login')||request.url.endsWith(appKey)){
            request = request.clone({
                setHeaders: {
                    'Authorization': `Basic ${btoa(appKey + ':' + appSecret)}`
                }
            })
        }
        if(request.url.indexOf('user')!== -1 && request.method==='DELETE'){
            request = request.clone({
                setHeaders: {
                    'Authorization': `Basic ${btoa(appKey + ':' + masterSecret)}`
                }
            })
        }
        else if(sessionStorage.getItem('username')){
            request = request.clone({
                setHeaders: {
                    'Authorization': `Kinvey ${sessionStorage.getItem('authtoken')}`
                }
            })
        }

        return next.handle(request)
            .pipe(tap((response: HttpEvent<any>)=>{
               if(response instanceof HttpResponse && response['body']['_kmd']) {
                   if(response['body']['_kmd']['authtoken']){
                        sessionStorage.setItem('authtoken',response['body']['_kmd']['authtoken'])
                        sessionStorage.setItem('username',response['body']['username'])
                        sessionStorage.setItem('userId',response['body']['_id'])
                    }
                }
                
            }))

    }
}