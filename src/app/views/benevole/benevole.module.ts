import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AlertModule} from 'ngx-bootstrap/alert';
import {NgxSpinnerModule} from 'ngx-spinner';
import {AssociationService} from '../../service-layer/store/association/services/association.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptorService} from '../services/token-interceptor.service';
import {BenevoleComponent} from './benevole.component';
import {BenevoleService} from '../../service-layer/store/benevole/services/benevole.service';
import {BenevoleRoutingModule} from './benevole-routing.module';
import { AnnoncesComponent } from './annonces/annonces.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { ProfileComponent } from './profile/profile.component';
import {MatProgressBarModule} from '@angular/material';

@NgModule({
  declarations: [
    BenevoleComponent,
    AnnoncesComponent,
    EvenementsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    AlertModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BenevoleRoutingModule,
    MatProgressBarModule
  ],
  providers: [BenevoleService,
    AssociationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})

export class BenevoleModule {}

