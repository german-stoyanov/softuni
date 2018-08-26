import {
    HttpResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpErrorResponse,
    
} from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";

import { tap, catchError } from "rxjs/operators"
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router, private toastr: ToastrService){

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
        catchError((err: HttpErrorResponse) => {
    
              
          this.toastr.error(err.error.description, 'Warning!');
        

          return throwError(err.error);
        }));
    }
}