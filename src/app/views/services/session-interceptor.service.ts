import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class SessionInterceptorService implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // @ts-ignore
    return next.handle(req).pipe(catchError((err, caught) => {
      console.log(err);
      console.log(err.error);
        if (err.status === 401) {
          localStorage.clear();
          this.router.navigate(['/login']);
          return of(err);
        }
        throw err;
    }));
}
}
