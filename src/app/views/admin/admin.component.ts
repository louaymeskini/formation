import {NgForm} from '@angular/forms';
import {Component, DoCheck, OnChanges, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AssociationService} from '../services/association.service';
import {AssociationModel} from '../models/association.model';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {AlertConfig} from 'ngx-bootstrap';

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
  templateUrl: './admin.component.html',
  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class AdminComponent implements OnInit {
  @ViewChild('dangerModal') public dangerModal: ModalDirective;
  api: string = environment.apiUrl + 'association/img/';
  listeAssociation: AssociationModel [] = [];
  listeAssociation2: AssociationModel [] = [];
  alertsDeleted: any = [];
  // pageOfItems: Array<any>;
  // deleteName: string;

  constructor(private http: HttpClient, private associationService: AssociationService) {
  }

  ngOnInit() {
    this.loadAssociation();
  }

  loadAssociation () {
    this.associationService.fetchAssociations().subscribe(liste => {
      // console.log('liste ', liste);
      // this.listeAssociation = liste;
      this.listeAssociation2.push(liste);
      this.listeAssociation = [].concat.apply([], this.listeAssociation2);
      // this.listeAssociation = this.listeAssociation2[0]
      // console.log('listeAssociation ', this.listeAssociation);
    });
  }

  supprimerAssociation(association: AssociationModel) {
    // this.deleteName = association.nom;
    console.log('supprimer');
    this.associationService.deleteAssociation(association);
    this.listeAssociation = [];
    this.listeAssociation2 = [];
    this.add(association.nom);
    this.loadAssociation();
  }

  add(nom: string): void {
    this.alertsDeleted.push({
      type: 'success',
      nom : nom.toUpperCase(),
      msg: 'L\'Association ' + nom.toUpperCase() + ' est supprimée le: ' + new Date().toLocaleTimeString(),
      timeout: 6000
    });
  }

  // onChangePage(pageOfItems: Array<any>) {
  //   // update current page of items
  //   this.pageOfItems = pageOfItems;
  // }

}
