import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css']
})
export class AjouterAnnonceComponent implements OnInit {
  annonceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validate();
  }

  ngOnInit() {
  }

  validate() {
    this.annonceForm = new FormGroup({
      titre: new FormControl(null,
        [Validators.minLength(4)]),
      sujet: new FormControl(null,
        [Validators.minLength(4)]),
      pieceJointe: new FormControl(null),
    });

  }

  onSubmit () {}

}
