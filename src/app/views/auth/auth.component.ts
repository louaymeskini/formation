import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {AlertConfig} from 'ngx-bootstrap';
import {throwError} from 'rxjs';


export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'warning' });
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  error: string;
  alertsError: any = [];

  constructor(private authService: AuthService, private router: Router,
              private spinnerService: NgxSpinnerService) {
  }

  ngOnInit() {
     this.authService.autoLogin();
    // localStorage.clear();
    // console.log('logged ', this.authService.logged);
    // console.log('type ', this.authService.role);
  }

  onLogin(form: NgForm) {
    this.spinnerService.show();
    // console.log(form);
    const username = form.value.username;
    const password = form.value.password;
    // console.log(username, password);
    this.authService.login(username, password).subscribe(resData => {
      console.log('component', resData);
      if (resData.status !== 'ok') {
        this.error = 'username / mot de passe invalide !';
        this.errorNotif(this.error);
        this.spinnerService.hide();
      }
        this.spinnerService.hide();
    },
      error1 => {
      throwError(error1);
        const errorMsg = 'Erreur Interne :(';
        this.spinnerService.hide();
        this.errorNotif(errorMsg);
      });
    form.reset();
  }

  errorNotif(errorMsg: string): void {
    this.alertsError.push({
      type: 'danger',
      msg: errorMsg + ' ' + new Date().toLocaleTimeString(),
      timeout: 6000
    });
  }

}
