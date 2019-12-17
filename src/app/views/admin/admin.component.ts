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
  styleUrls: ['./admin.component.css'],
  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class AdminComponent implements OnInit {
  @ViewChild('dangerModal') public dangerModal: ModalDirective;
  api: string = environment.apiUrl + 'association/img/';
  listeAssociation: AssociationModel [];
  alertsDeleted: any = [];
  config: any;

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
      console.log('liste', liste);
      // @ts-ignore
      this.listeAssociation = [...liste];
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.listeAssociation.length
      };

      this.spinnerService.hide();
      console.log('listeAssociation ', this.listeAssociation.length);
    });
  }

  pageChanged(event) {
    console.log(event);
    this.config.currentPage = event;
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

}
