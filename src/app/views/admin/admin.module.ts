import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin-routing';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminComponent} from './admin.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptorService} from '../services/token-interceptor.service';
import { BenevolesComponent } from './benevoles/benevoles.component';
import { AjouterAssociationComponent } from './ajouter-association/ajouter-association.component';
import {AssociationService} from '../../service-layer/store/association/services/association.service';
import {AlertModule} from 'ngx-bootstrap/alert';
import {ModalModule} from 'ngx-bootstrap/modal';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { ProfileComponent } from './profile/profile.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AdminComponent,
    BenevolesComponent,
    AjouterAssociationComponent,
    JwPaginationComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ],
  providers: [AssociationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class AdminModule { }
