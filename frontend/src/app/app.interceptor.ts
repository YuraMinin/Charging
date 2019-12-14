import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
    HttpResponse, HttpUserEvent, HttpErrorResponse} from '@angular/common/http';
import {Observable} from "rxjs";
import { Router } from '@angular/router';



const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
    providedIn: 'root'
})
export class Interceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
            req = req.clone({
                setHeaders: {
                    Authorization: sessionStorage.getItem('token')
                }
            })
        }
        return next.handle(req);
    }

}
