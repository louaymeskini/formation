import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {AnnonceModel} from '../../../../core/models/annonce.model';
import {AssociationService} from '../../../../service-layer/store/association/services/association.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css']
})
export class AjouterAnnonceComponent implements OnInit {
  annonceForm: FormGroup;
  fileToUpload: File;
  imgError: boolean;

  constructor(private fb: FormBuilder,
              private associationService: AssociationService,
              private router: Router,
              private spinnerService: NgxSpinnerService) {
    this.validate();

  }

  ngOnInit() {}

  validate() {
    this.annonceForm = this.fb.group({
      titre: ['', Validators.required],
      sujet: ['', Validators.required],
      pieceJointe: ['', Validators.required]
    });

  }

  handleFileInput(files: FileList) {
    if ((files[0].type.split('/').pop()) === 'png' ||
      (files[0].type.split('/').pop()) === 'jpg' ||
      (files[0].type.split('/').pop()) === 'jpeg' ||
      (files[0].type.split('/').pop()) === 'pdf' ||
      (files[0].type.split('/').pop()) === 'docx')  {
      this.imgError = false;
      this.fileToUpload = files[0];
      console.log('file: ', this.fileToUpload);
    } else {
      this.imgError = true;
    }
  }

  onSubmit (form: AnnonceModel) {
    this.spinnerService.show();
    form.pieceJointe = this.fileToUpload;
    this.associationService.createAnnonce(form).subscribe(res => {
        console.log('res', res);
        // @ts-ignore
      if (res !== res.state) {
          console.log('type', typeof res);
          this.router.navigate(['/association/annonces']);
        this.spinnerService.hide();
        }
      }, error => {
      throwError(error);
      this.spinnerService.hide();
    });
  }

  get titre () {
    return this.annonceForm.get('titre');
  }

  get sujet () {
    return this.annonceForm.get('sujet');
  }

  get pieceJointe () {
    return this.annonceForm.get('piceJointe');
  }

}
