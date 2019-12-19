import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {EvenementModel} from '../../../../core/models/evenement.model';
import {throwError} from 'rxjs';
import {AssociationService} from '../../../../service-layer/store/association/services/association.service';

@Component({
  selector: 'app-ajouter-evenement',
  templateUrl: './ajouter-evenement.component.html',
  styleUrls: ['./ajouter-evenement.component.css']
})
export class AjouterEvenementComponent implements OnInit {
  evenementForm: FormGroup;

  constructor(private fb: FormBuilder,
              private spinnerService: NgxSpinnerService,
              private associationService: AssociationService) {
    this.validate();
  }

  ngOnInit() {
  }

  validate() {
    this.evenementForm = this.fb.group({
      titre: ['', Validators.required],
      sujet: ['', Validators.required],
      ville: ['', Validators.required],
      adresse: ['', Validators.required],
      date: ['', Validators.required]
    });

  }

  onSubmit(evenement: EvenementModel) {
    console.log('evenement', evenement);
    console.log('evenementForm', this.evenementForm);
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
