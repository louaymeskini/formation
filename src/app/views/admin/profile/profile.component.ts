import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AssociationService} from '../../services/association.service';
import {AdminService} from '../../services/admin.service';
import {AdminModel} from '../../models/admin.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // adminForm: FormGroup;
  submitted: boolean;
  adminInfo: AdminModel [] = [];

  adminForm: FormGroup = new FormGroup({
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

  constructor(private adminService: AdminService) {
    this.validate();
  }

  ngOnInit() {
    this.submitted = false;
    this.previousValue().subscribe(res => {
      console.log('adminInfo3', this.adminInfo);
    });
  }

  validate () {
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

  previousValue () {
    // tslint:disable-next-line:prefer-const
    // let info: AdminModel [] = [];
    return new Observable(observer => {
      this.adminService.fetchAdmin().subscribe(res => {
        // this.adminInfo = res;
        this.adminInfo.push(res);
        observer.next(true);
        // this.adminInfo = [].concat.apply([], info);
        console.log('adminInfo1', this.adminInfo[0]);
      });
    });
  }

  onSubmit () {
    this.submitted = true;
    console.log('form', this.adminForm);
    if (this.adminForm.valid) {
      console.log('valid');
    } else {
      console.log('invalid');
    }
  }

}
