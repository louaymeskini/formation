import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {AssociationService} from '../../../service-layer/store/association/services/association.service';
import {AssociationModel} from '../../../core/models/association.model';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-ajouter-association',
  templateUrl: './ajouter-association.component.html',
  styleUrls: ['./ajouter-association.component.css']
})
export class AjouterAssociationComponent implements OnInit {
  fileToUpload: File;
  // @ViewChild('Form') Form: NgForm;
   @ViewChild('password2') password2: ElementRef;
   passwordMatch: boolean;
   imgError: boolean;

  constructor(private associationService: AssociationService,
              private spinnerService: NgxSpinnerService) { }

  log(val) { console.log(val); }
  ngOnInit() {
  }

  ajouterAssociation(form: AssociationModel) {
    this.spinnerService.show();
    console.log('form', form);
    if (form.password === this.password2.nativeElement.value) {
    form.imageAssociation = this.fileToUpload;
    this.associationService.createAssociation(form);
      this.passwordMatch = true;
      this.spinnerService.hide();
    } else {
      console.log('password doesn\'t match');
      this.passwordMatch = false;
      this.spinnerService.hide();
    }
  }

   handleFileInput(files: FileList) {
     if ((files[0].type.split('/').pop()) === 'png' ||
       (files[0].type.split('/').pop()) === 'jpg' ||
       (files[0].type.split('/').pop()) === 'jpeg')  {
       this.imgError = false;
    this.fileToUpload = files[0];
    console.log('file: ', this.fileToUpload);
     } else {
       this.imgError = true;
     }
  }


}
