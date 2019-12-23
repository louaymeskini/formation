import {Component, OnInit} from '@angular/core';
import {AssociationService} from '../../../service-layer/store/association/services/association.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {AssociationModel} from '../../../core/models/association.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  api: string = environment.apiUrl + 'association/img/';
  imgError: boolean;
  fileToUpload: File;
  associationForm: FormGroup;
  infoAssociation: AssociationModel;
  newAssociation: AssociationModel = {
    adresse: '',
    codePostale: '',
    email: '',
    imageAssociation: '',
    nom: '',
    password: '',
    tel: '',
    username: '',
    ville: ''
  };

  constructor(private associationService: AssociationService,
              private spinnerService: NgxSpinnerService,
              private fb: FormBuilder,
              private router: Router) {
    this.imgError = false;
    this.validate();
  }

  ngOnInit() {
    this.loadAssociation();
    console.log(this.fileToUpload);
  }

  validate () {
    this.associationForm = this.fb.group({
      imageAssociation: [''],
      nom: [''],
      ville: [''],
      adresse: [''],
      codePostale: ['', [Validators.min(1000),
        Validators.max(9999)]],
      tel: ['', [Validators.min(20000000),
        Validators.max(99999999)]],
      email: ['', Validators.email],
      username: [''],
      password: ['', Validators.required],
    });
  }

  loadAssociation() {
    this.associationService.fetchAssociation().subscribe(res => {
      this.infoAssociation = res;
      console.log(this.infoAssociation);
    });
  }

  onSubmit () {
    this.spinnerService.show();
    console.log('form', this.associationForm);
    // tslint:disable-next-line:max-line-length
    this.fileToUpload === undefined ? this.newAssociation.imageAssociation = this.infoAssociation.imageAssociation : this.newAssociation.imageAssociation = this.fileToUpload;
    this.nom.value === '' ? this.newAssociation.nom = this.infoAssociation.nom : this.newAssociation.nom = this.nom.value;
    this.ville.value === '' ? this.newAssociation.ville = this.infoAssociation.ville : this.newAssociation.ville = this.ville.value;
    // tslint:disable-next-line:max-line-length
    this.adresse.value === '' ? this.newAssociation.adresse = this.infoAssociation.adresse : this.newAssociation.adresse = this.adresse.value;
    // tslint:disable-next-line:max-line-length
    this.codePostale.value === '' ? this.newAssociation.codePostale = this.infoAssociation.codePostale : this.newAssociation.codePostale = this.codePostale.value;
    this.tel.value === '' ? this.newAssociation.tel = this.infoAssociation.tel : this.newAssociation.tel = this.tel.value;
    this.email.value === '' ? this.newAssociation.email = this.infoAssociation.email : this.newAssociation.email = this.email.value;
    // tslint:disable-next-line:max-line-length
    this.username.value === '' ? this.newAssociation.username = this.infoAssociation.username : this.newAssociation.username = this.username.value;
    // tslint:disable-next-line:max-line-length
    this.password.value === '' ? this.newAssociation.password = this.infoAssociation.password : this.newAssociation.password = this.password.value;

    console.log('new', this.newAssociation);

    this.associationService.updateAssociation(this.newAssociation).subscribe(res => {
      if (res.state === 'ok') {
        this.router.navigate(['/association']);
        this.spinnerService.hide();
      }
    }, error => {
      throwError(error);
      this.spinnerService.hide();
    });

  }

  handleFileInput(files: FileList) {
    if ((files[0].type.split('/').pop()) === 'png' ||
      (files[0].type.split('/').pop()) === 'jpg' ||
      (files[0].type.split('/').pop()) === 'jpeg')  {
      this.imgError = false;
      this.fileToUpload = files[0];
      this.newAssociation.imageAssociation = this.fileToUpload;
    } else {
      this.imgError = true;
    }
    console.log('file: ', this.fileToUpload);
  }

  get imageAssociation() {
    return this.associationForm.get('imageAssociation');
  }

  get nom() {
    return this.associationForm.get('nom');
  }

  get ville() {
    return this.associationForm.get('ville');
  }

  get adresse() {
    return this.associationForm.get('adresse');
  }

  get codePostale() {
    return this.associationForm.get('codePostale');
  }

  get tel() {
    return this.associationForm.get('tel');
  }

  get email() {
    return this.associationForm.get('email');
  }

  get username() {
    return this.associationForm.get('username');
  }

  get password() {
    return this.associationForm.get('password');
  }

}
