import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AssociationService} from '../../../service-layer/store/association/services/association.service';
import {AdminService} from '../../../service-layer/store/admin/services/admin.service';
import {AdminModel} from '../../../core/models/admin.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  adminForm: FormGroup;
  submitted: boolean;
  adminInfo: AdminModel;
  newAdmin: AdminModel = {email: '', nom: '', password: '', prenom: '', username: ''};
  canUpdate: boolean = false;
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

  constructor(private adminService: AdminService) {
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
        [Validators.minLength(4)]),
      prenom: new FormControl(null,
        [Validators.minLength(4)]),
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
    console.log('form', this.adminForm);
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
      if (this.canUpdate === false) {
        this.newAdmin.password = password;
        console.log('1', this.newAdmin);
        this.adminService.updateAdmin(this.newAdmin);
        // this.adminService.updateAdmin()
      } else {
        if (this.adminForm.value.newPassword === this.adminForm.value.confirmPassword) {
          this.passwordMatch = true;
          this.newAdmin.password = this.adminForm.value.newPassword;
          console.log('2', this.newAdmin);
          this.adminService.updateAdmin(this.newAdmin);
        } else {
          this.passwordMatch = false;
        }
      }
    } else {
      console.log('invalid formulaire');
    }
  }

}
