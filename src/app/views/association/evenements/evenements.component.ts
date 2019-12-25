import { Component, OnInit } from '@angular/core';
import {EvenementModel} from '../../../core/models/evenement.model';
import {AssociationService} from '../../../service-layer/store/association/services/association.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {throwError} from 'rxjs';
import {AlertConfig} from 'ngx-bootstrap';

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css'],
  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class EvenementsComponent implements OnInit {
  evenements: EvenementModel[] = [];
  config: any;
  alertsEmpty: any = [];
  alertsDeleted: any = [];

  constructor(private associationService: AssociationService,
              private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.loadEvenement();
  }

  loadEvenement() {
    this.spinnerService.show();
    this.associationService.fetchEvenements().subscribe(res => {
      this.evenements = res;
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.evenements.length
      };
      if (this.evenements.length === 0) {
        const type = 'info';
        const msg = 'Vous n\'avez pas des évenements :)';
        this.notificationEmty(type, msg);
      }
      this.spinnerService.hide();
    }, error => {
      throwError(error);
      const type = 'warning';
      const msg = 'Erreur inconnue :(';
      this.spinnerService.hide();
      this.notificationEmty(type, msg);
    });
  }

  supprimerEvenement(evenement: EvenementModel) {
    this.spinnerService.show();
    this.associationService.deleteEvenements(evenement).subscribe(res => {
      console.log(res);
      if (res.state === 'ok') {
        this.evenements = [];
        this.loadEvenement();
        this.spinnerService.hide();
        this.add(evenement.titre);
      }
    }, error => {
      throwError(error);
      const type = 'warning';
      const msg = 'Erreur inconnue :(';
      this.spinnerService.hide();
      this.notificationEmty(type, msg);
    });
  }

  notificationEmty(type: string, msg: string): void {
    this.alertsEmpty.push({
      type: type,
      msg: msg,
      timeout: null
    });
  }

  add(nom: string): void {
    this.alertsDeleted.push({
      type: 'success',
      nom : nom.toUpperCase(),
      msg: 'L\'Evenement ' + nom.toUpperCase() + ' est supprimée le: ' + new Date().toLocaleTimeString(),
      timeout: 6000
    });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
