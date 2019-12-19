import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AssociationComponent} from './association.component';
import {AssociationRoutingModule} from './association-routing.module';
import {NgxSpinnerModule} from 'ngx-spinner';
import {NgxPaginationModule} from 'ngx-pagination';
import {AlertModule} from 'ngx-bootstrap';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AjouterAnnonceComponent } from './annonces/ajouter-annonce/ajouter-annonce.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { AjouterEvenementComponent } from './evenements/ajouter-evenement/ajouter-evenement.component';

@NgModule({
  declarations: [
    AssociationComponent,
    AnnoncesComponent,
    AjouterAnnonceComponent,
    EvenementsComponent,
    AjouterEvenementComponent
  ],
  imports: [
    CommonModule,
    AssociationRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    AlertModule,
    ReactiveFormsModule
  ]
})
export class AssociationModule {
}
