import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    // Aggiungo l'header "Origin" ad ogni richiesta prima di inviarla
    //const newRequest = request.clone({
    //  withCredentials: false
    //});

    return next.handle(request);
  }
}
