import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {AdminModel} from '../../../../core/models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  api: string = environment.apiUrl + 'admin/';
  idAdmin: string = JSON.parse(localStorage.getItem('idAdmin'));

  constructor(private http: HttpClient, private router: Router) {
  }

  fetchAdmin() {
    return this.http
      .get<AdminModel>(
        this.api + this.idAdmin,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
          }),
          responseType: 'json'
        }
      ).pipe(
        map(responseData => {
          return responseData;
        }),
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  updateAdmin(admin: AdminModel) {
    // console.log('admin', admin);
    return new Observable(observer => {
      this.http.put<{ msg: string, state: string }>(
        this.api + 'modifierr/' + this.idAdmin,
        admin,
        {
          headers: new HttpHeaders({
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }),
          responseType: 'json'
        }
      ).subscribe(response => {
          observer.next(response);
        },
        error => {
          observer.error(error);
        });
    });
  }
}
