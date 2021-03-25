import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {EvenementModel} from '../../../../core/models/evenement.model';
import {throwError} from 'rxjs';
import {AssociationService} from '../../../../service-layer/store/association/services/association.service';
import {Router} from '@angular/router';
import {formatDate} from '@angular/common';
import {DateValidator} from '../../../../core/dateValidator';
import * as moment from 'moment';

@Component({
  selector: 'app-ajouter-evenement',
  templateUrl: './ajouter-evenement.component.html',
  styleUrls: ['./ajouter-evenement.component.css']
})
export class AjouterEvenementComponent implements OnInit {
  minDate = moment(new Date()).unix();
  evenementForm: FormGroup;

  constructor(private fb: FormBuilder,
              private spinnerService: NgxSpinnerService,
              private associationService: AssociationService,
              private router: Router) {
    this.validate();
  }

  ngOnInit() {
    // console.log(new Date().toLocaleTimeString());
    const format = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
    // tslint:disable-next-line:radix
    console.log(format);
    console.log(this.minDate);
  }

  validate() {
    this.evenementForm = this.fb.group({
      titre: ['', [Validators.required, Validators.minLength(4)]],
      sujet: ['', [Validators.required, Validators.minLength(4)]],
      ville: ['', [Validators.required, Validators.minLength(4),
        Validators.pattern(/^[A-Za-z]+$/)]],
      adresse: ['', [Validators.required, Validators.minLength(4)]],
      date: ['', [Validators.required, DateValidator.dateValidator]]
    });

  }

  onSubmit(evenement: EvenementModel) {
    console.log(evenement.date);
    this.spinnerService.show();
    this.associationService.createEvenements(evenement).subscribe(res => {
        if (!res.state) {
          this.router.navigate(['/association/evenements']);
          this.spinnerService.hide();
        }
    },
      error => {
      throwError(error);
      this.spinnerService.hide();
      });
  }

  get titre() {
    return this.evenementForm.get('titre');
  }

  get sujet() {
    return this.evenementForm.get('sujet');
  }

  get ville() {
    return this.evenementForm.get('ville');
  }

  get adresse() {
    return this.evenementForm.get('adresse');
  }

  get date() {
    return this.evenementForm.get('date');
  }

}
