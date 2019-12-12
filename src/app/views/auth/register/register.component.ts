import { Component, OnInit } from '@angular/core';
import {BenevoleService} from '../../../service-layer/store/benevole/services/benevole.service';
import {BenevoleModel} from '../../../core/models/benevole.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {throwError} from 'rxjs';
import {Router} from '@angular/router';
import {AlertConfig} from 'ngx-bootstrap';
import {NgxSpinnerService} from 'ngx-spinner';

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'warning' });
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class RegisterComponent implements OnInit {
  benevoleForm: FormGroup;
  errorMsg: string;
  alertsError: any = [];

  constructor(private benevoleService: BenevoleService,
              private fb: FormBuilder,
              private router: Router,
              private spinnerService: NgxSpinnerService) {
  }

  ngOnInit() {
    this.validate();
  }

  validate () {
    this.benevoleForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      sexe: ['', Validators.required],
      ville: ['', Validators.required],
      codePostale: ['', [Validators.required, Validators.min(1000),
        Validators.max(9999)]],
      adresse: ['', Validators.required],
      tel: ['', [Validators.required, Validators.min(20000000),
      Validators.max(99999999)]],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  register () {
    console.log('benevoleForm ', this.benevoleForm.value);
    console.log('before', this.errorMsg);
    this.spinnerService.show();
    this.benevoleService.createBenevole(this.benevoleForm.value).subscribe(res => {
        console.log('res', res);
        if (res.state === 'ok') {
          this.router.navigate(['/']);
          this.spinnerService.hide();
        } else {
          const errorMsg = 'Opération Impossible :( ';
          this.errorNotif(errorMsg);
          this.spinnerService.hide();
          console.log('inside', this.errorMsg);
        }
      },
      error => {
        throwError(error);
        // this.errorMsg = error.statusText;
        const errorMsg = 'Erreur Interne :(';
        this.spinnerService.hide();
        this.errorNotif(errorMsg);
      });
    // this.spinnerService.hide();
    // setTimeout(() => {
    //   console.log('after', this.errorMsg);
    // }, 2000);
  }

  errorNotif(errorMsg: string): void {
    this.alertsError.push({
      type: 'warning',
      nom : errorMsg.toUpperCase(),
      msg: errorMsg.toUpperCase() + ' ' + new Date().toLocaleTimeString(),
      timeout: 6000
    });
  }

  get nom () {
    return this.benevoleForm.get('nom');
  }

  get prenom () {
    return this.benevoleForm.get('prenom');
  }

  get sexe () {
    return this.benevoleForm.get('sexe');
  }

  get ville () {
    return this.benevoleForm.get('ville');
  }

  get codePostale () {
    return this.benevoleForm.get('codePostale');
  }

  get adresse () {
    return this.benevoleForm.get('adresse');
  }

  get tel () {
    return this.benevoleForm.get('tel');
  }

  get username () {
    return this.benevoleForm.get('username');
  }

  get email () {
    return this.benevoleForm.get('email');
  }

  get password () {
    return this.benevoleForm.get('password');
  }

}
