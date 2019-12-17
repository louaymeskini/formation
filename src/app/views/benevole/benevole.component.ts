import {Component, OnDestroy, OnInit} from '@angular/core';
import {BenevoleService} from '../../service-layer/store/benevole/services/benevole.service';
import {AssociationModel} from '../../core/models/association.model';
import {throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {BenevoleModel} from '../../core/models/benevole.model';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-benevole',
  templateUrl: './benevole.component.html',
  styleUrls: ['./benevole.component.css']
})
export class BenevoleComponent implements OnInit, OnDestroy {
  all: AssociationModel[];
  oui: AssociationModel[];
  cours: AssociationModel[];
  non: AssociationModel[];
  api: string = environment.apiUrl + 'association/img/';
  config: any;

  constructor(private benevoleService: BenevoleService,
              private spinnerService: NgxSpinnerService ) { }

  ngOnInit() {
    this.fetchBenevoleAsso();
  }

  ngOnDestroy() {}

  fetchBenevoleAsso () {
    this.spinnerService.show();
    this.benevoleService.fetchBenevoleAssociation().subscribe(res => {
      console.log('res', res);
      res.non.map(item => {
        item['status'] = 'non';
      });
      res.oui.map(item => {
        item['status'] = 'oui';
      });
      res.cours.map(item => {
        item['status'] = 'cours';
      });
      // this.oui = [...res.oui];
      // this.cours = [...res.cours];
      // this.non = [...res.non];
      this.all = [...res.oui, ...res.cours, ...res.non];
        this.config = {
          id: 'pagination1',
          itemsPerPage: 5,
          currentPage: 1,
          totalItems: this.all.length
        };
      console.log('all', this.all);
      this.spinnerService.hide();
    },
      error => {
      throwError(error);
        this.spinnerService.hide();
      });
  }

  joindreAssociation(associationNon: AssociationModel) {
    this.spinnerService.show();
  this.benevoleService.demandeAdhesion(associationNon).subscribe(res => {
    if (res.state === 'ok') {
      console.log('ok');
      this.fetchBenevoleAsso();
      this.spinnerService.hide();
    } else {
      console.log('non');
      this.spinnerService.hide();
    }
  });
  }

  quitterAssociation(association: AssociationModel) {
    this.spinnerService.show();
    this.benevoleService.leaveAssociation(association).subscribe(res => {
      if (res.state === 'ok') {
        this.fetchBenevoleAsso();
      }
      this.spinnerService.hide();
    });
  }

  pageChanged(event) {
    console.log(event)
    this.config.currentPage = event;
  }


}
