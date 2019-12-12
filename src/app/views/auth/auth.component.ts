import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  error: string = null;

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
        this.spinnerService.hide();
    });
    form.reset();
  }

}
