import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {AssociationModel} from '../../../../core/models/association.model';
import {throwError} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {Router} from '@angular/router';
import {BenevoleModel} from '../../../../core/models/benevole.model';
import {AnnonceModel} from '../../../../core/models/annonce.model';
import {EvenementModel} from '../../../../core/models/evenement.model';

@Injectable({
  providedIn: 'root'
})
export class AssociationService {
  api: string = environment.apiUrl + 'association';
  apiAnnonce: string = environment.apiUrl + 'annonce';
  apiEvenement: string = environment.apiUrl + 'evenement';
  token = JSON.parse(localStorage.getItem('token'));
  idAssociation = JSON.parse(localStorage.getItem('idAssociation'));

  // fileToUpload: File = null;

  constructor(private http: HttpClient, private router: Router) {
  }

  static getIDAssociation() {
    return JSON.parse(localStorage.getItem('idAssociation'));
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

  fetchAssociation() {
    // console.log('token ', token);
    return this.http
      .get<AssociationModel>(
        this.api + '/' + AssociationService.getIDAssociation(),
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
          responseType: 'json'
        }
      )
      .pipe(
        catchError(errorRes => {
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
          }),
          // params: id,
          responseType: 'json'
        });
  }

  fetchAssociationBenevole() {
    return this.http.get<{
      oui: BenevoleModel [],
      non: BenevoleModel []
    }>(
      this.api + '/all/benevole/' + AssociationService.getIDAssociation(),
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

  acceptBenevole(benevole: BenevoleModel) {
    return this.http.put<{state: string, msg: string,
    result?: AssociationModel}>(
      this.api + '/ajout/' + AssociationService.getIDAssociation() + '/benevole/' + benevole._id,
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

  exclureBenevoleMembre(benevole: BenevoleModel) {
    return this.http.put<{state: string, msg: string}>(
      this.api + '/supp/' + AssociationService.getIDAssociation() + '/benevole/' + benevole._id,
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

  updateAssociation(association: AssociationModel) {
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
    return this.http.put<{state: string, msg: string}>(
      this.api + '/modifier/' + AssociationService.getIDAssociation() + '/img',
      formData,
      {
        responseType: 'json'
      }
    ).pipe(
        catchError(this.handleError)
    );
  }

  // annonces of associations

  fetchAnnonces() {
    return this.http.get<{AnnonceModel}>(
      this.api + '/liste/annonce/' + AssociationService.getIDAssociation(),
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
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

  createAnnonce(annonce: AnnonceModel) {
    const formData: FormData = new FormData();
    formData.append('titre', annonce.titre);
    formData.append('sujet', annonce.sujet);
    formData.append('pieceJointe', annonce.pieceJointe);
    console.log('annonce', annonce);
    return this.http.post<{state: string, msg: string | AnnonceModel}>(
      this.apiAnnonce + '/ajouter/' + AssociationService.getIDAssociation(),
      formData,
      {
        responseType: 'json'
      }
    ).pipe(
      catchError(this.handleError)
    );
  }

  deleteAnnonce(annonce: AnnonceModel) {
    return this.http.delete<{state: string, msg: string}>(
      this.apiAnnonce + '/supprimer/' + annonce._id,
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

  // events of associations

  fetchEvenements() {
    return this.http.get<{state: string, msg: string | EvenementModel}>(
        this.api + '/liste/evenement/' + AssociationService.getIDAssociation(),
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            }),
            responseType: 'json'
          }
    ).pipe(
      map(responseData => {
        return responseData[0].evenements;
      }),
      catchError(this.handleError)
    );
  }

  createEvenements(evenement: EvenementModel) {
    return this.http.post<{state?: string, msg?: string, evenement?: EvenementModel}>(
      this.apiEvenement + '/ajouter/' + AssociationService.getIDAssociation(),
      JSON.stringify(evenement),
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

  deleteEvenements(evenement: EvenementModel) {
    return this.http.delete<{state: string, msg: string}>(
      this.apiEvenement + '/supprimer/' + evenement._id,
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

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

}
