import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('token') !== null) {
    const token = JSON.parse(localStorage.getItem('token'));
    console.log('intercept', token);
    const tokenToRequest = req.clone({
      headers: req.headers.append(
        'x-access-token', token)
    });
    return next.handle(tokenToRequest);
    } else {
      return next.handle(req);
    }
  }
}
