import { Component, OnInit } from '@angular/core';
import {AssociationService} from '../../../service-layer/store/association/services/association.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {throwError} from 'rxjs';
import {AnnonceModel} from '../../../core/models/annonce.model';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {
  annonces: AnnonceModel[] = [];
  config: any;

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
      this.spinnerService.hide();
    },
      error => {
      throwError(error);
        this.spinnerService.hide();
      });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
