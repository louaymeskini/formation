import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {AssociationModel} from '../models/association.model';
import {throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AssociationService {
  api: string = environment.apiUrl + 'association';
  token = JSON.parse(localStorage.getItem('token'));

  // fileToUpload: File = null;

  constructor(private http: HttpClient, private router: Router) {
  }

  fetchAssociations() {
    // console.log('token ', token);
    return this.http
      .get<AssociationModel>(
        this.api + '/all',
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
             // 'x-access-token': this.token
          }), // 'x-access-token': localStorage.getItem('token')
          responseType: 'json'
        }
      )
      .pipe(
        map(responseData => {
          console.log('responseData ', responseData);
          return responseData;
        }),
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  createAssociation(association: AssociationModel) {
    const formData: FormData = new FormData();
    formData.append('imageAssociation', association.imageAssociation);
    formData.append('nom', association.nom);
    formData.append('adresse', association.adresse);
    formData.append('ville', association.ville);
    formData.append('codePostale', association.codePostale);
    formData.append('tel', association.tel);
    formData.append('email', association.email);
    formData.append('username', association.username);
    formData.append('password', association.password);
    return this.http.post<{ msg: string, state: string }>(
      this.api + '/ajouter',
      formData,
      {
        // headers: new HttpHeaders({
        //   'x-access-token': this.token
        // }),
        responseType: 'json'
      }
    ).subscribe(response => {
        // console.log('ajouttttttt', response);
        if (response.state !== 'not ok') {
          this.router.navigate(['/admin']);
        }
      },
      error => {
        return throwError(error);
      });
  }

  deleteAssociation(association: AssociationModel) {
    // let id = new HttpParams();
    // id = id.append('', association._id);
    console.log(association._id);
    return this.http
      .delete<{ msg: string, state: string }>(this.api + '/supprimer/' + association._id,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
            // 'x-access-token': this.token
          }),
          // params: id,
          responseType: 'json'
        }).subscribe(res => {
          console.log('res', res);
          // if (res.state === 'ok') {
          //   alert('Done.');
          // }
        }
      );
  }

}
