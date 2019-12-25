import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AssociationService} from '../../../service-layer/store/association/services/association.service';
import {AdminService} from '../../../service-layer/store/admin/services/admin.service';
import {AdminModel} from '../../../core/models/admin.model';
import {Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  adminForm: FormGroup;
  submitted: boolean;
  adminInfo: AdminModel;
  newAdmin: AdminModel = {email: '',
    nom: '',
    password: '',
    newPassword: '',
    confirmPassword: '',
    prenom: '',
    username: ''};
  canUpdate: boolean = false;
  errorMsg: string = '';
  passwordMatch: boolean;

  canUpdatePass() {
    this.canUpdate = !this.canUpdate;
    if (this.canUpdate === true) {
      this.adminForm.addControl('newPassword', new FormControl(null,
        [Validators.required, Validators.minLength(4)]));
      this.adminForm.addControl('confirmPassword', new FormControl(null,
        [Validators.required, Validators.minLength(4)]));
    } else {
      this.adminForm.removeControl('newPassword');
      this.adminForm.removeControl('confirmPassword');
    }
  }

  constructor(private adminService: AdminService,
              private router: Router,
              private spinnerService: NgxSpinnerService) {
    this.validate();
  }

  ngOnInit() {
    this.submitted = false;
    // this.checked = false;
    this.previousValue().subscribe();
  }

  validate() {
    this.adminForm = new FormGroup({
      nom: new FormControl(null,
        [Validators.minLength(4),
          Validators.pattern(/^[A-Za-z]+$/)]),
      prenom: new FormControl(null,
        [Validators.minLength(4),
          Validators.pattern(/^[A-Za-z]+$/)]),
      email: new FormControl(null,
        [Validators.email]),
      username: new FormControl(null,
        [Validators.minLength(4)]),
      password: new FormControl(null,
        [Validators.required, Validators.minLength(4)])
    });

  }

  previousValue() {
    return new Observable(observer => {
      this.adminService.fetchAdmin().subscribe(res => {
        // this.adminInfo = res;
        this.adminInfo = res;
        observer.next(true);
        // this.adminInfo = [].concat.apply([], info);
        console.log('adminInfo1', this.adminInfo);
      });
    });
  }

  onSubmit() {
    this.submitted = true;

    const nom = this.adminForm.value.nom;
    const prenom = this.adminForm.value.prenom;
    const email = this.adminForm.value.email;
    const username = this.adminForm.value.username;
    const password = this.adminForm.value.password;
    this.adminForm.value.nom === null ? this.newAdmin.nom = this.adminInfo.nom : this.newAdmin.nom = nom;
    this.adminForm.value.prenom === null ? this.newAdmin.prenom = this.adminInfo.prenom : this.newAdmin.prenom = prenom;
    this.adminForm.value.username === null ? this.newAdmin.username = this.adminInfo.username : this.newAdmin.username = username;
    this.adminForm.value.email === null ? this.newAdmin.email = this.adminInfo.email : this.newAdmin.email = email;
    if (this.adminForm.valid) {
      this.spinnerService.show();
      if (this.canUpdate === false) {
        this.newAdmin.password = password;
        console.log('1', this.newAdmin);
        this.adminService.updateAdmin(this.newAdmin).subscribe((response: any) => {
          this.spinnerService.hide();
          this.errorMsg = response.msg;
          if (response.state !== 'not ok') {
            this.router.navigate(['/admin']);
            this.spinnerService.hide();
          }
        }, error => {
          this.spinnerService.hide();
          return throwError(error);
        });
      } else {
        if (this.adminForm.value.newPassword === this.adminForm.value.confirmPassword) {
          this.passwordMatch = true;
          this.newAdmin.password = password;
          this.newAdmin.newPassword = this.adminForm.value.newPassword;
          this.newAdmin.confirmPassword = this.adminForm.value.confirmPassword;
          console.log('2', this.newAdmin);
          this.adminService.updateAdmin(this.newAdmin).subscribe((response: any) => {
            this.spinnerService.hide();
            this.errorMsg = response.msg;
            if (response.state !== 'not ok') {
              this.router.navigate(['/admin']);
            }
          }, error => {
            return throwError(error);
          });
        } else {
          this.spinnerService.hide();
          this.errorMsg = 'password mismatch';
        }
      }
    } else {
      this.spinnerService.hide();
      this.errorMsg = 'invalid formulaire';
    }
    // this.errorMsg = this.adminService.errorMsg;
  }

}
