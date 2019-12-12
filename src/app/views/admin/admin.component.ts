import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AssociationService} from '../../service-layer/store/association/services/association.service';
import {AssociationModel} from '../../core/models/association.model';
import {environment} from '../../../environments/environment';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {AlertConfig} from 'ngx-bootstrap';
import {NgxSpinnerService} from 'ngx-spinner';

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
  listeAssociation: AssociationModel;
  alertsDeleted: any = [];
  // pageOfItems: Array<any>;
  // deleteName: string;

  constructor(private http: HttpClient,
              private associationService: AssociationService,
              private spinnerService: NgxSpinnerService) {
  }

  ngOnInit() {
    this.loadAssociation();
  }

  loadAssociation () {
    this.spinnerService.show();
    this.associationService.fetchAssociations().subscribe(liste => {
      this.listeAssociation = liste ;
      this.spinnerService.hide();
      console.log('listeAssociation ', this.listeAssociation);
    });
  }

  supprimerAssociation(association: AssociationModel) {
    console.log('supprimer');
    this.associationService.deleteAssociation(association).subscribe(data => {
      this.loadAssociation();
    });
    this.add(association.nom);
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
