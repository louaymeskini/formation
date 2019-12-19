import { Component, OnInit } from '@angular/core';
import {BenevoleService} from '../../../service-layer/store/benevole/services/benevole.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {AnnonceModel} from '../../../core/models/annonce.model';
import {throwError} from 'rxjs';
import {AlertConfig} from 'ngx-bootstrap';
import {environment} from '../../../../environments/environment';

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css'],
  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class AnnoncesComponent implements OnInit {
  annonces: AnnonceModel[] = [];
  config: any;
  alertsEmpty: any = [];
  apiAnnonce: string = environment.apiUrl + 'annonce';

  constructor(private benevoleService: BenevoleService,
              private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.loadAnnonces();
  }

  loadAnnonces () {
    this.spinnerService.show();
    this.benevoleService.fetchAnnonces().subscribe(res => {
      this.annonces = res;
      console.log('res', this.annonces);
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.annonces.length
      };
      if (this.annonces.length === 0) {
        const type = 'info';
        const msg = 'Vous n\'avez pas des annonces puisque vous' +
          ' n\'etes pas membre dans acune association :)';
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
