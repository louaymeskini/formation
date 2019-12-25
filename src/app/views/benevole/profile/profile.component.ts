import { Component, OnInit } from '@angular/core';
import {BenevoleService} from '../../../service-layer/store/benevole/services/benevole.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import {throwError} from 'rxjs';
import {BenevoleModel} from '../../../core/models/benevole.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  infoBenevole: BenevoleModel | any;
  benevoleForm: FormGroup;
  newBenevole: BenevoleModel = {
    adresse: '',
    codePostale: '',
    email: '',
    nom: '',
    password: '',
    prenom: '',
    sexe: '',
    tel: '',
    username: '',
    ville: ''
  };

  constructor(private benevoleService: BenevoleService,
              private spinnerService: NgxSpinnerService,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.loadBenevole();
    this.validate();
  }

  loadBenevole() {
    this.spinnerService.show();
    this.benevoleService.fetchBenevole().subscribe(res => {
        this.infoBenevole = res;
        this.spinnerService.hide();
      console.log(this.infoBenevole);
    }, error => {
      throwError(error);
      this.spinnerService.hide();
    });
  }

  validate () {
    this.benevoleForm = this.fb.group({
      nom: ['', [Validators.minLength(4), Validators.pattern(/^[A-Za-z]+$/)]],
      prenom: ['', [Validators.minLength(4), Validators.pattern(/^[A-Za-z]+$/)]],
      sexe: [''],
      ville: ['', [Validators.minLength(4), Validators.pattern(/^[A-Za-z]+$/)]],
      codePostale: ['', [Validators.min(1000), Validators.pattern((/^-?(0|[1-9]\d*)?$/)),
        Validators.max(9999)]],
      adresse: ['', Validators.minLength(4)],
      tel: ['', [Validators.min(20000000), Validators.pattern((/^-?(0|[1-9]\d*)?$/)),
        Validators.max(99999999)]],
      username: ['', Validators.minLength(4)],
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit() {
    this.spinnerService.show();
    console.log(this.benevoleForm);
    this.nom.value === '' ? this.newBenevole.nom = this.infoBenevole.nom : this.newBenevole.nom = this.nom.value;
    this.prenom.value === '' ? this.newBenevole.prenom = this.infoBenevole.prenom : this.newBenevole.prenom = this.prenom.value;
    this.newBenevole.sexe = this.infoBenevole.sexe;
    this.adresse.value === '' ? this.newBenevole.adresse = this.infoBenevole.adresse : this.newBenevole.adresse = this.adresse.value;
    this.ville.value === '' ? this.newBenevole.ville = this.infoBenevole.ville : this.newBenevole.ville = this.ville.value;
    // tslint:disable-next-line:max-line-length
    this.codePostale.value === '' ? this.newBenevole.codePostale = this.infoBenevole.codePostale : this.newBenevole.codePostale = this.codePostale.value;
    this.tel.value === '' ? this.newBenevole.tel = this.infoBenevole.tel : this.newBenevole.tel = this.tel.value;
    this.email.value === '' ? this.newBenevole.email = this.infoBenevole.email : this.newBenevole.email = this.email.value;
    this.username.value === '' ? this.newBenevole.username = this.infoBenevole.username : this.newBenevole.username = this.username.value;
    this.password.value === '' ? this.newBenevole.password = this.infoBenevole.password : this.newBenevole.password = this.password.value;

    this.benevoleService.updateBenevole(this.newBenevole).subscribe(res => {
      if (res.state === 'ok') {
        this.router.navigate(['/benevole']);
        this.spinnerService.hide();
      }
    }, error => {
      throwError(error);
      this.spinnerService.hide();
    });
  }

  get nom() {
    return this.benevoleForm.get('nom');
  }

  get prenom() {
    return this.benevoleForm.get('prenom');
  }

  get sexe() {
    return this.benevoleForm.get('sexe');
  }

  get ville() {
    return this.benevoleForm.get('ville');
  }

  get adresse() {
    return this.benevoleForm.get('adresse');
  }

  get codePostale() {
    return this.benevoleForm.get('codePostale');
  }

  get tel() {
    return this.benevoleForm.get('tel');
  }

  get email() {
    return this.benevoleForm.get('email');
  }

  get username() {
    return this.benevoleForm.get('username');
  }

  get password() {
    return this.benevoleForm.get('password');
  }

}
