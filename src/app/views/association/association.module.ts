import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AssociationComponent} from './association.component';
import {AssociationRoutingModule} from './association-routing.module';
import {NgxSpinnerModule} from 'ngx-spinner';
import {AlertModule} from 'ngx-bootstrap/alert';
import {ModalModule} from 'ngx-bootstrap/modal';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AjouterAnnonceComponent } from './annonces/ajouter-annonce/ajouter-annonce.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { AjouterEvenementComponent } from './evenements/ajouter-evenement/ajouter-evenement.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AssociationComponent,
    AnnoncesComponent,
    AjouterAnnonceComponent,
    EvenementsComponent,
    AjouterEvenementComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AssociationRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    AlertModule,
    ReactiveFormsModule,
    ModalModule
  ]
})
export class AssociationModule {
}
