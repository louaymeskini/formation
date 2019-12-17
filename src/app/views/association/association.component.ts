import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {AssociationService} from '../../service-layer/store/association/services/association.service';
import {BenevoleModel} from '../../core/models/benevole.model';
import {throwError} from 'rxjs';
import {AlertConfig} from 'ngx-bootstrap';

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
  templateUrl: './association.component.html',
  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class AssociationComponent implements OnInit {
  all: BenevoleModel[];
  allLength: number;
  config: any;
  alertsDeleted: any = [];
  alertsEmpty: any = [];


  constructor(private associationService: AssociationService,
              private spinnerService: NgxSpinnerService ) { }

  ngOnInit() {
  this.fetchAssociationBen();
  }

  fetchAssociationBen() {
    this.spinnerService.show()
    this.associationService.fetchAssociationBenevole().subscribe(res => {
      res.non.map(item => {
        item['status'] = 'non';
      });
      res.oui.map(item => {
        item['status'] = 'oui';
      });
      this.all = [...res.oui, ...res.non];
      this.allLength = this.all.length;
      if (this.allLength === 0) {
        const type = 'info';
        const msg = 'Vous n\'avez pas des benevoles membres :)';
      this.notificationEmty(type, msg);
      }
      this.config = {
        id: 'pagination1',
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.all.length
      };
      this.spinnerService.hide();
    }, error => {
      throwError(error);
      const type = 'warning';
      const msg = 'Erreur inconnue :(';
      this.spinnerService.hide();
      this.notificationEmty(type, msg);
    });
  }

  AcceptMembre(benevole: BenevoleModel) {
    this.spinnerService.show();
    this.associationService.acceptBenevole(benevole).subscribe(res => {
      if (res.state === 'ok') {
        this.fetchAssociationBen();
        this.spinnerService.hide();
      }
    });
  }

  exclureMembre(benevole: BenevoleModel) {
    this.spinnerService.show();
    this.associationService.exclureBenevoleMembre(benevole).subscribe(res => {
      if (res.state === 'ok') {
        this.fetchAssociationBen();
        this.spinnerService.hide();
        this.notificationDelete(benevole.nom);
      }
      this.spinnerService.hide();
    }, error => {
      throwError(error);
      this.spinnerService.hide();
    });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  notificationDelete(nom: string): void {
    this.alertsDeleted.push({
      type: 'success',
      nom : nom.toUpperCase(),
      msg: 'Le Benevole ' + nom.toUpperCase() + ' est supprimée le: ' + new Date().toLocaleTimeString(),
      timeout: 6000
    });
  }

  notificationEmty(type: string, msg: string): void {
    this.alertsEmpty.push({
      type: type,
      msg: msg,
      timeout: null
    });
  }
}
