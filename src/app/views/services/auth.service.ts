import { Injectable } from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import {UserModel} from '../../core/models/user.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, throwError} from 'rxjs';
import {AssociationModel} from '../../core/models/association.model';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
// import {User} from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api: string = environment.apiUrl + 'auth/';
  role: string = null;
  logged = false;
  // user = new BehaviorSubject<User>(null);
  // errorMessage: string = 'Erreur Inconnue!';

  constructor(private http: HttpClient, private router: Router) { }


  login(username: string, password: string) {
    return this.http
      .post<UserModel>(
        this.api,
        {
          username: username,
          password: password
        }
      )
      .pipe(
        catchError(this.handleError),

        tap(resData => {
            // console.log('resData ', resData);
            if (resData.status !== 'error') { // resData.status !== 'error'
              if (resData.data.user.type === 'admin') {
                localStorage.setItem('token', JSON.stringify(resData.data.token));
                localStorage.setItem('idAdmin', JSON.stringify(resData.data.user._id));
                this.role = 'admin';
                this.logged = true;
              } else if (resData.data.user.type === 'association') {
                localStorage.setItem('token', JSON.stringify(resData.data.token));
                localStorage.setItem('idAassociation', JSON.stringify(resData.data.user._id));
                this.role = 'association';
                this.logged = true;
              }
            } else {
              this.role = null;
              this.logged = false;
              console.log('invalid');
              // this.errorMessage = 'vérifier votre login!';
            }
          }
        ));
  }

  getType() {
    // console.log('type ', this.role);
    return this.role;
  }

  autoLogin() {
    if (localStorage.getItem('token') !== null && this.logged === true) {
      const role = this.role;
      // console.log('role', role);
      if (role === 'admin') {
      this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/association']);
      }
    } else {
      localStorage.clear();
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.router.navigate(['/login']);
    localStorage.clear();
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMsg = 'An unknown error occurred!';
    if (errorRes.error || errorRes.statusText) {
      return throwError(errorMsg);
    } else {
      errorMsg = 'Vérifier votre login!';
    }
    return throwError(errorMsg);
  }

}
