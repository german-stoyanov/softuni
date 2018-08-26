
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
const appKey = 'kid_rk6IN3LUm'
const appSecret = 'e1d95d34d9294f1085042343ebda7dc9'

@Injectable()
export class SuccessInterceptor implements HttpInterceptor {

  constructor(
    private toastr: ToastrService,
    private router: Router
   
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        tap(
          (event: HttpEvent<any>) => {
            if (event instanceof HttpResponse && request.url.endsWith('login')) {
              
              this.toastr.success('Login Successful!');
              this.router.navigate(['/home']);
            } else if (event instanceof HttpResponse && request.url.endsWith(appKey) && request.method==="POST") {
              this.toastr.success('Register Successful!');
              this.router.navigate(['/home']);
            } else if(event instanceof HttpResponse && request.url.endsWith('flats') && request.method==="POST"){
              this.toastr.success('Flat created successfully!');
              this.router.navigate(['/home']);
            } else if (event instanceof HttpResponse && request.method==='DELETE' && request.url.indexOf('user')=== -1){
              this.toastr.success('item deleted successfully')
            } else if(event instanceof HttpResponse && request.method==="PUT" && request.url.indexOf('flats')!== -1 && this.router.url.indexOf('all')===-1){
              this.toastr.success('Add edited successfully')
              this.router.navigate(['/home'])
            } else if(event instanceof HttpResponse && request.method==="PUT" && request.url.indexOf('flats')!== -1 && !request.body['removal']){
              this.toastr.success('Flat Added to favourites')
            } else if(event instanceof HttpResponse && request.method==="PUT" && request.url.indexOf('flats')!== -1 && request.body['removal']){
              this.toastr.success('Flat Removed from favourites')
            } else if(event instanceof HttpResponse && request.url.endsWith('brokers') && request.method==="POST"){
              this.toastr.success('Broker created successfully!');
              this.router.navigate(['/brokers/all'])
            } else if(event instanceof HttpResponse && request.method==='DELETE' && request.url.indexOf('user') !== -1){
              this.toastr.success('User baned successfully!');
            } else if(event instanceof HttpResponse && request.url.indexOf('_logout')!== -1){
              this.toastr.success('Logout successful!');
              this.router.navigate(['/signin'])
            }
        }
          
        )
      );
  }

  
}