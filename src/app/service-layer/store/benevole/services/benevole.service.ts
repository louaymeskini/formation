import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {BenevoleModel} from '../../../../core/models/benevole.model';
import {Router} from '@angular/router';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AssociationModel} from '../../../../core/models/association.model';

@Injectable({
  providedIn: 'root'
})
export class BenevoleService {

  api: string = environment.apiUrl + 'benevole/';
  token = JSON.parse(localStorage.getItem('token'));
  idBenevole = JSON.parse(localStorage.getItem('idBenevole'));

  constructor(private http: HttpClient, private router: Router) {}

  static getIDbenevole () {
    return JSON.parse(localStorage.getItem('idBenevole'));
  }

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

  fetchBenevoleAssociation () {
    return this.http.get<{oui: AssociationModel[],
      cours: AssociationModel[],
    non: AssociationModel[]}>(
      this.api + BenevoleService.getIDbenevole() + '/association',
      {
        headers: new HttpHeaders({
          'Content-type': 'application/json'
        }),
        responseType: 'json'
      }
    ).pipe(
      map(reponse => {
        return reponse;
      }),
      catchError(this.handleError)
    );
  }

  demandeAdhesion(associationNon: AssociationModel) {
    console.log('asso', associationNon);
    return this.http.put<{state: string, msg: string}>(
      this.api + 'ajouter/' + BenevoleService.getIDbenevole() + '/association/' + associationNon._id,
      // associationNon._id,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        responseType: 'json'
      }
    ).pipe(
      catchError(this.handleError)
    );
  }

  leaveAssociation(association: AssociationModel) {
    return this.http.put<{state: string, msg: string}>(
      this.api + 'supprimer/' + BenevoleService.getIDbenevole()
      + '/association/' + association._id,
      {
        headers: new HttpHeaders({
          'Content-type': 'application/json'
        }),
        responseType: 'json'
      }
    ).pipe(
      catchError(this.handleError)
    );
  }

  fetchAnnonces() {
    return this.http.get<{AnnonceModel}>(
      this.api + 'liste/annonce/' + BenevoleService.getIDbenevole(),
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        responseType: 'json'
      }
    ).pipe(
      map(responseData => {
        return responseData[0].annonces;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}
