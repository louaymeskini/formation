import { Component, OnInit } from '@angular/core';
import {BenevoleService} from '../../../service-layer/store/benevole/services/benevole.service';
import {throwError} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';
import {EvenementModel} from '../../../core/models/evenement.model';
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

  constructor(private benevoleService: BenevoleService,
              private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.loadEvenements();
  }

  loadEvenements() {
    this.spinnerService.show();
    this.benevoleService.fetchEvenements().subscribe(res => {
      // @ts-ignore
      this.evenements = res;
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.evenements.length
      };
      if (this.evenements.length === 0) {
        const type = 'info';
        const msg = 'Vous n\'avez pas des évenements';
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

  notificationEmty(type: string, msg: string): void {
    this.alertsEmpty.push({
      type: type,
      msg: msg,
      timeout: null
    });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
