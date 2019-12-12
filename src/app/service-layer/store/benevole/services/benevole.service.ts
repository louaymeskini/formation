import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {BenevoleModel} from '../../../../core/models/benevole.model';
import {Router} from '@angular/router';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BenevoleService {

  api: string = environment.apiUrl + 'benevole/';
  token = JSON.parse(localStorage.getItem('token'));

  constructor(private http: HttpClient, private router: Router) {}

  fetchBenevoles() {
    return this.http.get<BenevoleModel>(
      this.api + 'all',
      {
        headers: new HttpHeaders({
          'Content-Type' : 'application/json'
        }),
        responseType: 'json'
      }
    ).pipe(
      map(responseData => {
        return responseData;
      }),
      catchError(this.handleError)
    );
  }

  createBenevole(benevole: BenevoleModel) {
    console.log('benevole', JSON.stringify(benevole));
    // JSON.stringify(benevole);
    return this.http.post<{msg: string, state: string}>(
      this.api + 'ajouter',
      JSON.stringify(benevole), {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        responseType: 'json'
      }
    ).pipe(
      catchError(this.handleError)
    );
  }

  deleteBenevole (benevole: BenevoleModel) {
    console.log(benevole._id);
    return this.http.delete<{msg: string, state: string}>(
      this.api + 'supprimer/' + benevole._id,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        // params: id,
        responseType: 'json'
      }).pipe(
        catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}
