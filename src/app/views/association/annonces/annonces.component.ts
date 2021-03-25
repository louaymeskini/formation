import { Component, OnInit } from '@angular/core';
import {AssociationService} from '../../../service-layer/store/association/services/association.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {throwError} from 'rxjs';
import {AnnonceModel} from '../../../core/models/annonce.model';
import {AlertConfig} from 'ngx-bootstrap/alert';

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
  alertsDeleted: any = [];

  constructor(private associationService: AssociationService,
              private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.loadAnnonces();
  }

  loadAnnonces () {
    this.spinnerService.show();
    this.associationService.fetchAnnonces().subscribe((res: any) => {
        this.annonces.push(...res);
        this.config = {
          itemsPerPage: 5,
          currentPage: 1,
          totalItems: this.annonces.length
        };
        if (this.annonces.length === 0) {
          const type = 'info';
          const msg = 'Vous n\'avez pas des annonces :)';
          this.notificationEmty(type, msg);
        }
      this.spinnerService.hide();
    },
      error => {
      throwError(error);
        const type = 'warning';
        const msg = 'Erreur inconnue :(';
        this.spinnerService.hide();
        this.notificationEmty(type, msg);
      });
  }

  supprimerAnnonce(annonce: AnnonceModel) {
    this.spinnerService.show();
    this.associationService.deleteAnnonce(annonce).subscribe(res => {
      if (res.state === 'ok') {
        this.annonces = [];
        this.loadAnnonces();
        this.spinnerService.hide();
        this.add(annonce.titre);
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
      msg: 'L\'annonce ' + nom.toUpperCase() + ' est supprimée le: ' + new Date().toLocaleTimeString(),
      timeout: 6000
    });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
