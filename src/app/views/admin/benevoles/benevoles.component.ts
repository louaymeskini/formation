import {Component, OnInit, ViewChild} from '@angular/core';
import {BenevoleService} from '../../../service-layer/store/benevole/services/benevole.service';
import {BenevoleModel} from '../../../core/models/benevole.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {AlertConfig, ModalDirective} from 'ngx-bootstrap';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';


export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
  selector: 'app-benevoles',
  templateUrl: './benevoles.component.html',
  styleUrls: ['./benevoles.component.css'],
  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class BenevolesComponent implements OnInit {
  @ViewChild('dangerModal') public dangerModal: ModalDirective;
  benevoles: BenevoleModel;
  alertsDeleted: any = [];

  constructor(private benevoleService: BenevoleService,
              private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.allBenevole();
  }

  allBenevole () {
    this.spinnerService.show();
    this.benevoleService.fetchBenevoles().subscribe(res  => {
      console.log('res', res)
      this.benevoles = res;
      this.spinnerService.hide();
    }, error => {
      throwError(error);
      this.spinnerService.hide();
    });
  }

  supprimerBenevole(benevole: BenevoleModel) {
    this.spinnerService.show();
    // console.log(benevole);
    this.benevoleService.deleteBenevole(benevole).subscribe(res => {
      console.log('result ', res);
      if (res.state === 'ok') {
        this.allBenevole();
        this.notificationDelete(benevole.nom);
        this.spinnerService.hide();
        this.dangerModal.hide();
      } else {
        this.spinnerService.hide();
        this.dangerModal.hide();
        this.notificationError(benevole.nom);
      }
    },
      error => {
      throwError(error);
        this.spinnerService.hide();
        this.notificationError(benevole.nom);
      });
  }

  notificationDelete(nom: string): void {
    this.alertsDeleted.push({
      type: 'success',
      nom : nom.toUpperCase(),
      msg: 'Le Benevole ' + nom.toUpperCase() + ' est supprimée le: ' + new Date().toLocaleTimeString(),
      timeout: 6000
    });
  }

  notificationError(nom: string): void {
    this.alertsDeleted.push({
      type: 'warning',
      nom : nom.toUpperCase(),
      msg: 'Impossible de supprimée le Benevole ' + nom.toUpperCase() + ', Erreur Inconnue le: ' + new Date().toLocaleTimeString(),
      timeout: 6000
    });
  }

}
