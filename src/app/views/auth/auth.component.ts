import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
     this.authService.autoLogin();
    // localStorage.clear();
    // console.log('logged ', this.authService.logged);
    // console.log('type ', this.authService.role);
  }

  onLogin(form: NgForm) {
    // console.log(form);
    const username = form.value.username;
    const password = form.value.password;
    // console.log(username, password);
    this.authService.login(username, password).subscribe(resData => {
      console.log(resData);
      if (resData.status !== 'error' && resData.data.user.type === 'admin') {
        this.router.navigate(['/admin']);
      } else if (resData.status !== 'error' && resData.data.user.type === 'association') {
        this.router.navigate(['/association']);
        // console.log(resData.data.user.type);
      } else {
        this.error = 'Vérifier votre login';
        // console.log(this.error);
      }
    });
    form.reset();
  }

}
