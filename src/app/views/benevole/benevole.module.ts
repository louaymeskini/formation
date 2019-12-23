import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AlertModule, ModalModule} from 'ngx-bootstrap';
import {NgxSpinnerModule} from 'ngx-spinner';
import {AssociationService} from '../../service-layer/store/association/services/association.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptorService} from '../services/token-interceptor.service';
import {BenevoleComponent} from './benevole.component';
import {BenevoleService} from '../../service-layer/store/benevole/services/benevole.service';
import {BenevoleRoutingModule} from './benevole-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { AnnoncesComponent } from './annonces/annonces.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { ProfileComponent } from './profile/profile.component';

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
    NgxPaginationModule
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

